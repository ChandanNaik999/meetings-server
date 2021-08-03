require( 'dotenv' ).config();
require( './data/init' );

const express = require( 'express' );
const path = require( 'path' );

// we destructure the returned exports object to extract only functions we want
const { logSuccess, logError } = require( './utils/logger' );
const { pageNotFoundHandler, errorHandler } = require( './middleware/error' );
const { logger } = require( './middleware/logger' );

const app = express();
app.use( logger );

// define routes
const authRouter = require( './routes/auth' );
const usersRouter = require( './routes/users' );
const calendarRouter = require( './routes/calendar' );
const meetingsRouter = require( './routes/meetings' );
const teamsRouter = require( './routes/teams' );
const profileRouter = require( './routes/profile' );
const accountRouter = require( './routes/account' );
const imageRouter = require( './routes/image' );

// server pages
app.use( express.static( path.join( process.cwd(), 'public' ), {
    extensions: ['html', 'htm', '.png'],
} ) );

app.use( '/api', express.static( path.join( process.cwd(), 'profile_pics' ) ) );


app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

app.use( '/api', imageRouter );
app.use( '/api/auth', authRouter );
app.use( '/api/users', usersRouter );
app.use( '/api/calendar', calendarRouter );
app.use( '/api/meetings', meetingsRouter );
app.use( '/api/teams', teamsRouter );
app.use( '/api/profile', profileRouter );
app.use( '/api/account', accountRouter );



app.use( pageNotFoundHandler );
app.use( errorHandler );

app.use( function( res, req, next ) {
    res.sendFile( path.join( process.cwd(), 'public', 'index.html' ))
} );

const PORT = process.env.PORT || 3000;

app
    .listen( PORT )
    .on( 'error', error => {
        logError( error.message );
    })
    .on( 'listening', () => {
        logSuccess( `server running on http://localhost:${PORT}` );
    });