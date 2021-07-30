const express = require( 'express' );
const { getUsers } = require( '../controllers/users' );
const { authenticate, authorize } = require( '../utils/auth' );

const router = express.Router();

router.get( '/', authenticate, authorize( 'general' ), getUsers );

module.exports = router;