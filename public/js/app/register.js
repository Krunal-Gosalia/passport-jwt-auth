var registerPage;

$(function() {
    registerPage = new registerPage();
});

var registerPage = Stapes.subclass({

    constructor: function() {
        this.init();
    },
    init: function() {
        this.initEvents();
    },

    initEvents: function() {
        $("#loginPage").on('click', function(e) {
            e.preventDefault();
            window.location = "/login";
        });

        $("#addNewUser").on('click', function(e) {
            e.preventDefault();
            var reg_name = $("#reg_name").val();
            var reg_email = $("#reg_email").val();
            var reg_pass = $("#reg_password").val();
            var reg_confpass = $("#reg_confpassword").val();

            if (reg_name == '' || reg_email == '', reg_pass == '' || reg_confpass == '') {
                toastr["error"]("All fields are mandatory", "Input Error");
                return;
            }

            if (reg_pass !== reg_confpass) {
                toastr["error"]("Password mismatch", "Input Error");
                return;
            }

            DAL.user.add(reg_name, reg_email, reg_pass, function(val) {
                if (val.success == false) {
                    toastr["error"](val.msg, "Login Failed");
                }

                if (val.success == true) {
                    toastr["success"](val.msg, "Login Successful");

                    setTimeout(function() {
                        window.location = "/login";
                    }, 5000);
                }

                // var token = val.token || null;
                // if (token) {
                //     console.log(token);
                //     localStorage.setItem("token", token);
                //     window.location = "/index";
                // } else {

                //     toastr["error"](val.message, "Login Failed");
                // }
            });

        });





    },




});



$(document).ready(function() {

});