const mongoose = require( 'mongoose' );
const User = mongoose.model( 'User' );

const getUsers = async ( req, res, next ) => {
    try {
        const users = await User
            .find()
            .select( { _id: true, email:true } );
    
        res.status( 200 ).json({
            message: 'success',
            data: users
        });
    } catch( error ) {
        return next( error );
    }
};


module.exports = {
    getUsers,
};