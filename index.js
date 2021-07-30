require( 'dotenv' ).config();
require( './data/init' );

const express = require( 'express' );
const path = require( 'path' );

// we destructure the returned exports object to extract only functions we want
const { logSuccess, logError } = require( './utils/logger' );
const { pageNotFoundHandler, errorHandler } = require( './middleware/error' );
const { logger } = require( './middleware/logger' );

const app = express();

// define routes
const authRouter = require( './routes/auth' );
const usersRouter = require( './routes/users' );
const calendarRouter = require( './routes/calendar' );
const meetingsRouter = require( './routes/meetings' );

app.use( logger );

// server pages
app.use( express.static( path.join( process.cwd(), 'public' ), {
    extensions: ['html', 'htm'],
} ) );

app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

app.use( '/api/auth', authRouter );
app.use( '/api/users', usersRouter );
app.use( '/api/calendar', calendarRouter );
app.use( '/api/meetings', meetingsRouter );


app.use( pageNotFoundHandler );
app.use( errorHandler );

const PORT = process.env.PORT || 3000;

app
    .listen( PORT )
    .on( 'error', error => {
        logError( error.message );
    })
    .on( 'listening', () => {
        logSuccess( `server running on http://localhost:${PORT}` );
    });