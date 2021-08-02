const express = require( 'express' );
const { setProfilePic} = require( '../controllers/profile' );
const { authenticate, authorize } = require( '../utils/auth' );
const path = require( 'path' );
let fileName = 'test'

const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join( process.cwd(), 'profile_pics' ))
    },
    filename: function (req, file, cb) {
        const {originalname: originalName} = file;
        const fileExtension = (originalName.match(/\.+[\S]+$/) || [])[0];
        cb(null, `${fileName}${fileExtension}`);
    }
  });

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb("Wrong file type", false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: 1024 * 1024 * 5
});

const setFileName = type => {
    console.log('here');
    return ( req, res, next ) => {
        fileName = res.locals.claims[type];
        next();
    };
};

const router = express.Router();

router.post( '/', authenticate, authorize( 'general' ), setFileName('_id'), upload.single('profilepic'), setProfilePic );

module.exports = router;