DAL = {
    auth: {
        userLogin: function(useremail, password, successFunc, errorFunc) {
            var success = successFunc || genericSuccess;
            var error = errorFunc || genericError;
            AJAX("/auth/userLogin", 'POST', {
                user_email: useremail,
                password: password
            }, success, error);
        }
    },
    user: {
        add: function(username, useremail, userpassword, successFunc, errorFunc) {
            var success = successFunc || genericSuccess;
            var error = errorFunc || genericError;
            AJAX("/addUser", 'POST', {
                name: username,
                email: useremail,
                password: userpassword

            }, success, error);
        },
        getAll: function(successFunc, errorFunc) {
            var success = successFunc || genericSuccess;
            var error = errorFunc || genericError;
            AJAX("/userAll", "POST", {}, success, error);
        }
    },
}

function AJAX(url, type, data, success, error) {
    var token = localStorage.getItem("token") || null;
    var requestObject = {
        url: url,
        method: type,
        headers: {
            Authorization: "Bearer " + token
        },
        data: data,
        success: success,
        error: error
    };
    // console.log(requestObject);

    $.ajax(requestObject);
}


function isNumber(val) {

    if (typeof val == 'number') {
        return true;
    } else {
        return false;
    }
}

function genericSuccess(data) {
    console.log("Generic Success!");
    console.log(data);
}

function genericError(err, err2, err3) {
    console.log(err);
    // console.log(err2);
    // console.log(err3);
}