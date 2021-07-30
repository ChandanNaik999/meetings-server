const mongoose = require( 'mongoose' );
const Meeting = mongoose.model( 'Meeting' );
const User = mongoose.model( 'User' );

const filterMeetings = async ( req, res, next ) => {
    let period = req.query.period;
    let search = req.query.search;
    let searchFlag = true;

    if( !search ) {
        search = '';
        searchFlag = false;
    }

    if( !period ) {
        period = 'all';
    }

    let dateFlag = true;
    let dateQuery = {}
    switch( period ) {
        case 'past':
            dateQuery = {
                $lt : (new Date()).toISOString()
            }
            break;
        case 'today':
            const yesterday = new Date()
            yesterday.setDate(yesterday.getDate() - 1)
            const tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            dateQuery = {
                $gt: yesterday.toISOString(),
                $lt: tomorrow.toISOString(),
            }
            break;
        case 'upcoming':
            dateQuery = {
                $gt : (new Date()).toISOString()
            }
            break;
        default:
            dateFlag = false
            dateQuery = {}
    }

    let requestQuery = {}
    if ( dateFlag && searchFlag ){
        requestQuery = {
            date : dateQuery,
            $text: 
                {
                    $search: search
                }
        }
    } else if ( searchFlag ) {
        requestQuery = {
            $text: 
                {
                    $search: search
                }
        }
    } else if ( dateFlag ) {
        requestQuery = { date : dateQuery }
    }


    try {
        const meetings = await Meeting
            .find(  requestQuery );
    
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

    // TODO : Check if the usersIds are

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

const editMeeting = async ( req, res, next ) => {
    let meetingId = req.params.id;
    let action = req.query.action;

    switch( action ){
        case 'add_attendee':
            let email = req.query.email;

            if( !email ){
                const error = new Error( 'Incorrect query parameter: email' );
                error.status = 400;
                return next( error );
            }
            try {
                const user = await User.findOne( { email } ).select( { email:true, _id:true } );
                
                if( !user ){
                    const error = new Error( 'User to be added does not exist' );
                    error.status = 400;
                    return next( error );
                }
                
                let attendee = user.toObject();
                attendee = {
                    email : user.email,
                    userId : user._id
                }

                const meeting = await Meeting.findByIdAndUpdate( 
                    meetingId,
                    {
                        $addToSet: {
                            attendees : attendee
                        },
                    },
                );

                if( !meeting ){
                    const error = new Error( 'Meeting does not exist' );
                    error.status = 400;
                    return next( error );
                }

                res.status( 200 ).json({
                    message: 'success',
                    data: meeting
                });
            } catch( error ) {
                return next( error );
            }
            break;
        case 'remove_attendee':
            console.log(res.locals.claims.email, meetingId);
            try{
                const meeting = await Meeting.findByIdAndUpdate( 
                    meetingId,
                    {
                        $pull: {
                            attendees : {
                                email: res.locals.claims.email,
                            }
                        },
                    },
                );
    
                if( !meeting ){
                    const error = new Error( 'Meeting does not exist' );
                    error.status = 400;
                    return next( error );
                }
    
                res.status( 200 ).json({
                    message: 'success',
                    data: meeting
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
    filterMeetings,
    addAMeeting,
    editMeeting,
};