SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        //libs
        'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        //app scripts
        'main':'./js/main.js'
    }
});
