const mongoose = require( 'mongoose' );
const User = mongoose.model( 'User' );
const Team = mongoose.model( 'Team' );
const Meeting = mongoose.model( 'Meeting' );

const updateUserDetails = async ( req, res, next ) => {
    let action = req.query.action;
    let email = res.locals.claims.email;
    const id = res.locals.claims._id;

    switch( action ){
        case 'update_user':
            if ( req.body.email )
                email = req.body.email;
            console.log(req.body);
            const fullName = req.body.name;
            if( !email || email === '' || Object.keys(email).length === 0) {
                email = res.locals.claims.email
            }
            try {
                const user = await User.findByIdAndUpdate( 
                    id,
                    {
                        email,
                        name: fullName,
                    } ).select( {email: true, name:true});
                
                if( !user ){
                    const error = new Error( 'User to be modified does not exist' );
                    error.status = 400;
                    return next( error );
                }

                if( email === res.locals.claims.email) {
                    return res.status( 200 ).json({
                        message: 'success',
                        data: user
                    });
                }

                const teams = await Team.updateMany ( 
                    {  
                        members : {
                            $elemMatch: {
                                email: res.locals.claims.email 
                            } 
                        }
                    },
                    {  
                        $set: { "members.$.email" : email }
                    }

                )

                if( !teams ){
                    const error = new Error( 'Error modifying teams' );
                    error.status = 400;
                    return next( error );
                }

                const meeting = await Meeting.updateMany ( 
                    {  
                        attendees : {
                            $elemMatch: {
                                email: res.locals.claims.email 
                            } 
                        }
                    },
                    {  
                        $set: { "attendees.$.email" : email }
                    }

                )

                if( !meeting ){
                    const error = new Error( 'Error modifying teams' );
                    error.status = 400;
                    return next( error );
                }

                res.status( 200 ).json({
                    message: 'success',
                    data: user
                });
            } catch( error ) {
                return next( error );
            }
            break;
        case 'update_password':
            const credentials = req.body;
            const { oldPassword, newPassword } = credentials;
            if( !credentials ) {
                const error = new Error( 'There is no credentials sent' );
                error.status = 400;
                return next( error );
            }

            try {
                const matchedUser = await User.findById( id );
        
                if( !matchedUser ){
                    const error = new Error( 'User deleted.' );
                    error.status = 401;
                    return next( error );
                }
        
                // check match of password
                matchedUser.checkPassword( oldPassword, async ( err, isMatch ) => {
                    if( err || !isMatch ) {
                        const error = err || new Error( 'old password is incorrect' );
                        error.status = 401;
                        return next( error );
                    }

                    try {
                        const updatedUser = await User.findByIdAndUpdate( 
                            id,
                            { password: newPassword } 
                            ).select( {email: true, name:true});
                        updatedUser.save();
        
                        res.status( 200 ).json({
                            message: 'success',
                            data:  updatedUser
                        });
                    } catch( error ) {
                        return next( error );
                    }
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
    updateUserDetails
};