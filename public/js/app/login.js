var loginPage;

$(function() {
    loginPage = new loginPage();
});

var loginPage = Stapes.subclass({

    constructor: function() {
        this.init();
    },
    init: function() {
        this.initEvents();
    },

    initEvents: function() {
        $("#login").on('click', function(e) {
            e.preventDefault();
            var useremail = $("#useremail").val();
            var password = $("#password").val();

            if (!useremail) {
                toastr["error"]("Email is mandatory", "Input Error");
                return;
            }

            if (!password) {
                toastr["error"]("Password is mandatory", "Input Error");
                return;
            }

            DAL.auth.userLogin(useremail, password, function(val) {
                if (val.success) {
                    localStorage.setItem("token", val.token);
                    window.location = "/index";
                } else {
                    toastr["error"](val.msg, "Login Failed");
                }
            });
        });

        $("#register").on('click', function(e) {
            e.preventDefault();
            window.location = "/register";
        })

    },
});