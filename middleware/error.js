const mongoose = require( 'mongoose' );

const pageNotFoundHandler = ( req, res, next ) => {
    const error = new Error( 'Not found' );
    error.status = 404;
    return next( error );
};

const errorHandler = ( error, req, res, next ) => {
    if( !error.status ) {
        if( error instanceof mongoose.Error.ValidationError ) {
            error.status = 400;
        } else if ( error.name === 'MongoError' && error.code === 11000 ) { 
            error.status = 400;
            error.message = `Duplicate Key Error: ${error.message}`;
        } else {
            error.status = 500;
        }
    } else {
        error.status = 500;
    }

    return res.status( error.status ).json({
        message: 'error',
        description: error.message,
        data: null
    });
};

module.exports = {
    pageNotFoundHandler,
    errorHandler
};