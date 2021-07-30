const express = require( 'express' );
const { getMeetingsByDate, addAMeeting } = require( '../controllers/meetings' );
const { authenticate, authorize } = require( '../utils/auth' );

const router = express.Router();

router.get( '/', authenticate, authorize( 'general' ), getMeetingsByDate );
router.post( '/', authenticate, authorize( 'general' ), addAMeeting );

module.exports = router;