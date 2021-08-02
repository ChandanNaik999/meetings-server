const mongoose = require( 'mongoose' );

const timeSchema = new mongoose.Schema({
    _id: false,
    hours: {
        type: Number,
        required: true,
        min: 0,
        max: 23
    },
    minutes: {
        type: Number,
        required: true,
        min: 0,
        max: 59
    }
});

const meetingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        minLength: 10
    },
    date: {
        type: Date,
        default: Date.now
    },
    startTime: {
        type: timeSchema,
        required: true
    },
    endTime: {
        type: timeSchema,
        required: true
    },
    attendees: [
        {
            _id: false,
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            },
            email: {
                type: String,
                required: true,
            }
        }
    ]
});

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
meetingSchema.path( 'attendees.email' ).validate( email => emailRegex.test( email.toLowerCase() ), 'Invalid email id format' );

meetingSchema.index({'$**': 'text'});

mongoose.model( 'Meeting', meetingSchema );