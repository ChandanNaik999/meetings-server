const setProfilePic = async ( req, res, next ) => {
    res.status( 200 ).json({
        message: 'success',
        data: null
    });
};

module.exports = {
    setProfilePic,
};