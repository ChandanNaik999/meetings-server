const mongoose = require( 'mongoose' );
const { logSuccess, logError } = require( '../utils/logger' );

// create models
require( '../models/User' );
require( '../models/Meeting' );

mongoose.set( 'returnOriginal', false );
mongoose.set( 'useFindAndModify', false );
mongoose.set( 'runValidators', true );

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

const connectionStr = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

mongoose.connect( connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on( 'open', () => {
    logSuccess( 'connected to the db' ); 
});

mongoose.connection.on( 'error', error => {
    logError( error.message );
});