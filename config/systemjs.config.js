SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        //libs
        'plugin-babel':'./libs/script/plugin-babel.js',
        'systemjs-babel-build': './libs/script/systemjs-babel-browser.js',
        'firebase':'./../libs/script/firebase.js',
        'jquery':'./../libs/script/jquery-3.2.1.min.js',
        'handlebars':'./../libs/script/handlebars-v4.0.5.js',

        //config
        'firebaseConfig':'./../config/firebase.config.js',

        //app scripts
        'main':'./../js/app.js',
    },
    packages: {
        '/':{
            defaultExtension: 'js'
        }
    }
});
System.import('main');