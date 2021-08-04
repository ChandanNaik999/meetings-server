const express = require( 'express' );
const { updateUserDetails, getTotalTeams, getTotalMeetings } = require( '../controllers/account' );
const { authenticate, authorize } = require( '../utils/auth' );

const router = express.Router();

router.patch( '/', authenticate, authorize( 'general' ), updateUserDetails );
router.get( '/teams', authenticate, authorize( 'general' ), getTotalTeams );
router.get( '/meetings', authenticate, authorize( 'general' ), getTotalMeetings );

module.exports = router;