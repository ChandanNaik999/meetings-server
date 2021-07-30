const express = require( 'express' );
const { getMeetingsByDate } = require( '../controllers/calendar' );
const { authenticate, authorize } = require( '../utils/auth' );

const router = express.Router();

router.get( '/', authenticate, authorize( 'general' ), getMeetingsByDate );

module.exports = router;