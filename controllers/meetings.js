const mongoose = require( 'mongoose' );
const Meeting = mongoose.model( 'Meeting' );

const getMeetingsByDate = async ( req, res, next ) => {
    let date = new Date( req.query.date );

    if( !date || date === 'Invalid Date') {
        const error = new Error( 'Incorrect date parameter' );
        error.status = 400;
        return next( error );
    }

    date = date.toISOString();

    try {
        const meetings = await Meeting
            .find( { date } );
    
        res.status( 200 ).json({
            message: 'success',
            data: meetings
        });
    } catch( error ) {
        return next( error );
    }
};

const addAMeeting = async ( req, res, next ) => {
    const meeting = req.body;

    // TODO : Check if the usersIds are unique

    if( !meeting ) {
        const error = new Error( 'There is no meeting data' );
        error.status = 400;
        return next( error );
    }

    try {
        const createdMeeting = await Meeting.create( meeting );

        res.status( 201 ).json({
            message: 'success',
            data: createdMeeting
        });
    } catch( error ) {
        return next( error );
    }
};

module.exports = {
    getMeetingsByDate,
    addAMeeting,
};