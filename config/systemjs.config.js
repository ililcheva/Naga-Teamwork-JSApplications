SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        //libs
        'plugin-babel':'./../libs/script/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './../libs/script/systemjs-plugin-babel/systemjs-babel-browser.js',
        'firebase':'./../libs/script/firebase.js',
        'jquery':'./../libs/script/jquery-3.2.1.min.js',
        'handlebars':'./../libs/script/handlebars-v4.0.5.js',
        'navigo':'./../libs/script/navigo.min.js',
        'owl-carousel':'./../libs/script/owl.carousel.min.js',

        //paths
        'firebaseConfig':'./../config/firebase.config.js',
        'database':'./../database/fb-database.js',
        'user-model':'./../models/user-model.js',
        'router':'./../config/router.config.js',
        'htmlHandler':'./../js/html.handler.js',
        'loadingScreen':'./../js/loading-screen.js',
        'events':'./../helpers/events.js',
        'accountController':'./../controllers/account-controller.js',
        'validator':'./../helpers/validator.js',
        'errorHandler':'./../helpers/error-handler.js',
        'carousel':'./../js/carousel.js',
        'header':'./../helpers/header-changer.js',

        //app scripts
        'main':'./../js/app.js',
        'main-test':'./../js/app.test.js' //remove this line in the future
    },
    packages: {
        '/':{
            defaultExtension: 'js'
        }
    }
});

System.import('main');
System.import('main-test'); //delete this in the future
