const mongoose = require( 'mongoose' );

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    shortName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        minLength: 10
    },
    members: [
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
teamSchema.path( 'members.email' ).validate( email => emailRegex.test( email.toLowerCase() ), 'Invalid email id format' );


mongoose.model( 'Team', teamSchema );