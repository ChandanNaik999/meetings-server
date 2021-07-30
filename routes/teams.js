const express = require( 'express' );
const { searchTeams, addATeam, editTeam } = require( '../controllers/teams' );
const { authenticate, authorize } = require( '../utils/auth' );

const router = express.Router();

router.post( '/', authenticate, authorize( 'general' ), addATeam );
router.get( '/', authenticate, authorize( 'general' ), searchTeams );
router.patch( '/:id', authenticate, authorize( 'general' ), editTeam );

module.exports = router;