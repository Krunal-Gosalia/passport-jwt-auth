var User = require('../../models/users');

exports.getAll = function(req, res) {
    User.getAll((err, user) => {
        if (!err)
            res.json({ success: true, msg: user });
    });

}

exports.registerUser = function(req, res) {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    User.findOne({ 'email': newUser.email }, function(err, usr) {
        if (err) return handleError(err);
        else if (usr) {
            res.json({ success: false, msg: 'User has been registered already' });
        } else {
            User.addUser(newUser, (err, user) => {
                if (err) {
                    res.json({ success: false, msg: 'Failed to register user.' });
                } else {
                    res.json({ success: true, msg: 'User registered!' });
                }
            });
        }

    });
}