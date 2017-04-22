SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        //libs
        'plugin-babel': './libs/script/plugin-babel.js',
        'systemjs-babel-build': './libs/script/systemjs-babel-browser.js',

        //app scripts
        'main':'./js/main.js',
        //paths
        'data': './database'
    },
    packages: {
        '/': {
            defaultExtension: 'js'
        }
    }
});
System.import('main');