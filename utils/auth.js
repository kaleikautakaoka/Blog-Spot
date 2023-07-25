// Ensures that a user is logged in before allowing them to access certain routes

function withAuth(req, res, next) {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
}
module.exports = withAuth;