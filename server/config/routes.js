var auth = require('../controllers/auth');
var userController = require('../controllers/user');

module.exports = function(app, cfg, passport) {

    app.get('/', function(req, res) {
        res.redirect('/login');
    });

    app.get('/login', function(req, res) {
        res.render('login');
    });

    app.get('/index', function(req, res) {
        res.render('index');
    });

    app.get('/register', function(req, res) {
        res.render('register');
    });

    app.get('/logout', auth.logout);




    app.post('/addUser', userController.registerUser);
    app.post('/auth/userLogin', auth.userLogin);
    app.post('/userAll', passport.authenticate('jwt', cfg.jwtSession), userController.getAll);
}