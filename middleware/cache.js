const { cyanBright } = require('chalk');
const redis = require( 'redis' );
const REDIS_PORT = process.env.REDISCLOUD_URL;
const client = redis.createClient( REDIS_PORT, {no_ready_check: true} );

function cache( redisKeyPrefix, cb ) {
    return function ( req, res, next ) {
        const userId = res.locals.claims._id;
        client.get( `${redisKeyPrefix}:${userId}`, ( err, data ) => {
            if( err ) {
                return next( err );
            }

            if ( data === null ) {
                cb( req, res, next ).then(() => {
                    client.setex(`${redisKeyPrefix}:${userId}`, 30, res.locals.data);
                })
                
            } else {
                res.send({
                    message: 'success',
                    type:'cached',
                    data
                })
            }

            
        } );

    }
}


module.exports = {
    cache
}