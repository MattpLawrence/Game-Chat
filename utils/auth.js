const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect("/loginPage");
  } else {
    next();
  }
};
const hasAuth = (req, res, next) => {
  if (req.session.logged_in) {
    return true;
  } else {
    false;
  }
};

module.exports = { withAuth, hasAuth };
