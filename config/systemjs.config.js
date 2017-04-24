SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        //libs
        'plugin-babel':'./libs/script/plugin-babel.js',
        'systemjs-babel-build': './libs/script/systemjs-babel-browser.js',
        'firebase':'./../libs/script/firebase.js',
        'jquery':'./../libs/script/jquery-3.2.1.min.js',
        'handlebars':'./../libs/script/handlebars-v4.0.5.js',
        'navigo':'./../libs/script/navigo.min.js',

        //paths
        'firebaseConfig':'./../config/firebase.config.js',
        'fb-database':'./../database/fb-database.js',
        'user-model':'./../models/user-model.js',
        'router':'./../js/router.js',

        //app scripts
        'main':'./../js/app.js',
    },
    packages: {
        '/':{
            defaultExtension: 'js'
        }
    }
});
System.import('firebaseConfig');
System.import('main');
