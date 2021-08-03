const express = require( 'express' );
const { updateUserDetails } = require( '../controllers/account' );
const { authenticate, authorize } = require( '../utils/auth' );

const router = express.Router();

router.patch( '/', authenticate, authorize( 'general' ), updateUserDetails );

module.exports = router;