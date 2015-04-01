
AccountsTemplates.configure({
    sendVerificationEmail: true,
    homeRoutePath: '/',
    redirectTimeout: 4000,
    defaultLayout: "masterLayout",
    defaultLayoutRegions: {
        nav: "nav",
        footer: "footer"
    },
    defaultContentRegion: "area"
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('verifyEmail');

FlowRouter.route('/', {
    action: function() {
        FlowLayout.render('masterLayout', {
            nav: "nav",
            footer: "footer",
            area: 'home'
        });
    }
});

FlowRouter.route('/user', {
    action: function() {
        FlowLayout.render('masterLayout', {
            nav: "nav",
            footer: "footer",
            area: 'pupilLessonList'
        });
    },
    middlewares: [AccountsTemplates.ensureSignedIn]
});
 
FlowRouter.route('/admin', {
    action: function() {
        FlowLayout.render('masterLayout', {
            nav: "nav",
            footer: "footer",
            area: 'adminLessonListByUser'
        });
    },
    middlewares: [AccountsTemplates.ensureSignedIn]
});

//AccountsTemplates.configure({
//    defaultLayout: 'masterLayout',
//    defaultLayoutRegions: {
//        top: 'header',
//        aside: 'menu'
//    },
//    defaultContentRegion: 'main'
//});



//
//
//
//
//
//
//




//FlowRouter.route('/', {
//    // an array of middlewares (we'll discuess about this later on)
//    middlewares: [],
//
//    // define your subscriptions
//    subscriptions: function(params, queryParams) {
//
//    },
//
//    // do some action for this route
//    action: function(params, queryParams) {
//        console.log("Params:", params)
//        console.log("Query Params:", queryParams)
//        FlowLayout.render("loginTest", {login: "login"} )
//    }
//});
//
//FlowRouter.route('/admin', {
//    // an array of middlewares (we'll discuess about this later on)
//    //middlewares: [isSignedIn, roleAccess],
//
//    // define your subscriptions
//    subscriptions: function(params, queryParams) {
//
//    },
//
//    // do some action for this route
//    action: function(params, queryParams) {
//        console.log("Params:", params)
//        console.log("Query Params:", queryParams)
//        FlowLayout.render("loginTest", {login: "login"} )
//    }
//});
//
//FlowRouter.route('/user', {
//    // an array of middlewares (we'll discuess about this later on)
//    //middlewares: [isSignedIn, roleAccess],
//
//    // define your subscriptions
//    subscriptions: function(params, queryParams) {
//
//    },
//
//    // do some action for this route
//    action: function(params, queryParams) {
//        console.log("Params:", params)
//        console.log("Query Params:", queryParams)
//        FlowLayout.render("loginTest", {login: "login"} )
//    }
//});
