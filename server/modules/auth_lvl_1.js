const rejectLevel1 = (req, res, next) => {
  // check if logged in
  if (req.user.access_level > 1) {
    // User is GREATER than Level 1, Do the next thing!
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
};

module.exports = { rejectLevel1 };