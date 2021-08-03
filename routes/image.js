const express = require( 'express' );
const { getDefaultProfilePic } = require( '../controllers/profile' );
const path = require( 'path' );
const router = express.Router();

router.get( '/:image', getDefaultProfilePic );

module.exports = router;

