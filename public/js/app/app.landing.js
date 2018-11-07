var landingPage;

$(function() {
    landingPage = new landingPage();
});

var landingPage = Stapes.subclass({

    constructor: function() {
        this.init();
    },
    init: function() {
        this.initEvents();
    },

    initEvents: function() {

        $("#nav-user").on('click', function(e) {
            e.preventDefault();
            DAL.user.getAll(function(users) {

                var source = $("#users-template").html();
                var template = Handlebars.compile(source);
                var html = template(users);

                $("#user-container").html(html);
            }, function(err) {
                $("#user-container").html("You are not authorized to view all users on application");
            });
        })



    },
});