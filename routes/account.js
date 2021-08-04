const express = require( 'express' );
const { updateUserDetails, getTotalTeams, getTotalMeetings } = require( '../controllers/account' );
const { authenticate, authorize } = require( '../utils/auth' );
const { cache } = require( '../middleware/cache' )
const router = express.Router();

router.patch( '/', authenticate, authorize( 'general' ), updateUserDetails );
// router.get( '/teams', authenticate, authorize( 'general' ), getTotalTeams );
// router.get( '/meetings', authenticate, authorize( 'general' ), getTotalMeetings );
router.get( '/meetings', authenticate, authorize( 'general' ), cache('total_meetings', getTotalMeetings) );
router.get( '/teams', authenticate, authorize( 'general' ), cache('total_teams', getTotalTeams));

module.exports = router;