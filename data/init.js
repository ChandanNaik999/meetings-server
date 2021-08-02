const mongoose = require( 'mongoose' );
const { logSuccess, logError } = require( '../utils/logger' );

// create models
require( '../models/User' );
require( '../models/Meeting' );
require( '../models/Team' );

mongoose.set( 'returnOriginal', false );
mongoose.set( 'useFindAndModify', false );
mongoose.set( 'runValidators', true );

const { DB_PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, NODE_ENV } = process.env;

const connectionStr = NODE_ENV === 'development' ? `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}` : `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

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