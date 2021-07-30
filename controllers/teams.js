const mongoose = require( 'mongoose' );
const Meeting = mongoose.model( 'Meeting' );
const Team = mongoose.model( 'Team' );

const searchTeams = async ( req, res, next ) => {
    try {
        console.log(res.locals.claims.email )
        const teams = await Team
            .find( { 
                members : {
                    $elemMatch: {
                        email: res.locals.claims.email 
                    } 
                }
            } );
    
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
    let meetingId = req.params.id;
    let action = req.query.action;

    switch( action ){
        case 'add_attendee':
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
                
                let attendee = user.toObject();
                attendee = {
                    email : user.email,
                    userId : user._id
                }

                const meeting = await Meeting.findByIdAndUpdate( 
                    meetingId,
                    {
                        $addToSet: {
                            attendees : attendee
                        },
                    },
                );

                if( !meeting ){
                    const error = new Error( 'Meeting does not exist' );
                    error.status = 400;
                    return next( error );
                }

                res.status( 200 ).json({
                    message: 'success',
                    data: meeting
                });
            } catch( error ) {
                return next( error );
            }
            break;
        case 'remove_attendee':
            console.log(res.locals.claims.email, meetingId);
            try{
                const meeting = await Meeting.findByIdAndUpdate( 
                    meetingId,
                    {
                        $pull: {
                            attendees : {
                                email: res.locals.claims.email,
                            }
                        },
                    },
                );
    
                if( !meeting ){
                    const error = new Error( 'Meeting does not exist' );
                    error.status = 400;
                    return next( error );
                }
    
                res.status( 200 ).json({
                    message: 'success',
                    data: meeting
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