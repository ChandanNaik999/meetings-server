// middleware stack (the functions are executed in the order they are passed to app.use())
const logger =( req, res, next ) => {
    console.log( 'Incoming request: ', req.url );
    next(); 
    console.log( 'Outgoing response: ', req.url );
};

module.exports = {
    logger
};