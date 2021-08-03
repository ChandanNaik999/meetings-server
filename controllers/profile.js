const setProfilePic = async ( req, res, next ) => {
    res.status( 200 ).json({
        message: 'success',
        data: null
    });
};

const fs = require('fs')
const path = require( 'path' );

const getProfilePic = async (req, res, next) => {
  const filepath = path.join( process.cwd(), 'profile_pics', (req.params.id+'.png') )
  try {
    // const file = fs.readFileSync(filepath)
    res.setHeader('Content-Disposition', 'attachment: filename="' + req.params.id + '"')
    res.sendFile(filepath);
  } catch( err ) {
      return next( err );
  }
  
}

const getDefaultProfilePic = async ( req, res, next ) => {
  try{
    const filename = req.params.image ;
    if ( filename.split('.').pop() == 'png') {
      res.sendFile(path.join( process.cwd(), 'profile_pics', 'default.png'));
    } else {
      next();
    }
  } catch( err ) {
    return next( err );
  }  
}

module.exports = {
    setProfilePic,
    getProfilePic,
    getDefaultProfilePic
};