const express = require( 'express' );
const { filterMeetings, addAMeeting, editMeeting } = require( '../controllers/meetings' );
const { authenticate, authorize } = require( '../utils/auth' );

const router = express.Router();

router.post( '/', authenticate, authorize( 'general' ), addAMeeting );
router.get( '/', authenticate, authorize( 'general' ), filterMeetings );
router.patch( '/:id', authenticate, authorize( 'general' ), editMeeting );

module.exports = router;