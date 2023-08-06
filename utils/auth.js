// Ensures that a user is logged in before allowing them to access certain routes
function withAuth(req, res, next) {
    if (!req.session.login) {
        res.redirect('/login');
    } else {
        next();
    }
}
module.exports = withAuth;