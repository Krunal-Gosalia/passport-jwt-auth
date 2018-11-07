// Auth 1.1: we are going to grab the user_id and is_admin flag to populate projects based on that


var User = require('../../models/users');
require('../config/passport')(passport);

var config = require('../config');


exports.userLogin = function(req, res) {
    var useremail = req.body.user_email;
    var password = req.body.password;

    User.getUserByEmail(useremail, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: "User not found!" });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                var payload = { id: user._id };
                const token = jwt.sign(payload, config.secret, {
                    expiresIn: 604800, // 1 week in seconds
                });

                res.json({
                    success: true,
                    token: token,
                    user: {
                        id: user._id,
                        name: user.name,
                        useremail: user.email,
                    }
                });
            } else {
                return res.json({ success: false, msg: "Invalid credentials!" });
            }
        });
    });
}

exports.logout = function(req, res) {
    req.logout();
    res.redirect('/login');
}