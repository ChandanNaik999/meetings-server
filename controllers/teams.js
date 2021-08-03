const mongoose = require( 'mongoose' );
const Team = mongoose.model( 'Team' );
const User = mongoose.model( 'User' );

const searchTeams = async ( req, res, next ) => {
    try {
        const teams = await Team
            .find( { 
                members : {
                    $elemMatch: {
                        email: res.locals.claims.email 
                    } 
                }
            } );

        console.log(teams)
    
        res.status( 200 ).json({
            message: 'success',
            data: teams
        });
    } catch( error ) {
        return next( error );
    }
};

const addATeam = async ( req, res, next ) => {
    const team = req.body;

    // TODO : Check if the usersIds are unique

    if( !team ) {
        const error = new Error( 'There is no team data' );
        error.status = 400;
        return next( error );
    }

    // check if the members has the user added
    if ( !team['members'].some(user => user.email === res.locals.claims.email) ) {
        team['members'].push( {
            "email": res.locals.claims.email,
            "userId": res.locals.claims._id,
        } );
    }

    try {
        const createdTeam = await Team.create( team );

        res.status( 201 ).json({
            message: 'success',
            data: createdTeam
        });
    } catch( error ) {
        return next( error );
    }
};

const editTeam = async ( req, res, next ) => {
    let teamId = req.params.id;
    let action = req.query.action;

    switch( action ){
        case 'add_member':
            let email = req.query.email;

            if( !email ){
                const error = new Error( 'Incorrect query parameter: email' );
                error.status = 400;
                return next( error );
            }
            try {
                const user = await User.findOne( { email } ).select( { email:true, _id:true } );
                
                if( !user ){
                    const error = new Error( 'User to be added does not exist' );
                    error.status = 400;
                    return next( error );
                }
                
                let member = user.toObject();
                member = {
                    email : user.email,
                    userId : user._id
                }

                const team = await Team.findOneAndUpdate(
                    {
                        _id : teamId,
                        members : {
                            $elemMatch: {
                                email: res.locals.claims.email 
                            } 
                        }
                    },
                    {
                        $addToSet: {
                            members : member
                        },
                    },
                );

                if( !team ){
                    const error = new Error( 'Team does not exist or your are not a member of the team.' );
                    error.status = 404;
                    return next( error );
                }

                res.status( 200 ).json({
                    message: 'success',
                    data: team
                });
            } catch( error ) {
                return next( error );
            }
            break;
        case 'remove_member':
            try{
                const team = await Team.findByIdAndUpdate( 
                    teamId,
                    {
                        $pull: {
                            members : {
                                email: res.locals.claims.email,
                            }
                        },
                    },
                );
    
                if( !team ){
                    const error = new Error( 'Team does not exist or you are not part of the team' );
                    error.status = 404;
                    return next( error );
                }
    
                res.status( 200 ).json({
                    message: 'success',
                    data: team
                });
            } catch( error ) {
                return next( error );
            }
            break;
        default:
            const error = new Error( 'Incorrect query parameters: action' );
            error.status = 400;
            return next( error );
    }
    
};

module.exports = {
    searchTeams,
    addATeam,
    editTeam,
};