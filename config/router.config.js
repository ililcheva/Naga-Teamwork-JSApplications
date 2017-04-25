import Navigo from 'navigo';
import $ from 'jquery';

const router = (() => {
    const navigo = (() => {
        const root = null;
        const useHash = true; // Defaults to: false
        const hash = '#!'; // Defaults to: '#'
        return new Navigo(root, useHash, hash);
    })();
    function handleHtml(content, target) {
        $.get(`htmls/${content}.html`)
            .then((content) => $(`#${target}`).html(content))
            .done(console.log(`${content} loaded`));
    }
    function initRoutes() {
        navigo.on(() => {
            handleHtml('home','content');
        }).resolve();
        navigo.on('home', () => {
            handleHtml('home','content');
        }).resolve();
        navigo.notFound(function (query) {
            console.log(`${query} not found 404`);
        }).resolve();


    }
    return{
        handleHtml: handleHtml,
        initRoutes: initRoutes
    }
})();







// router
//     .on({
//         'home': function () {
//             $.get("htmls/home.html").then( function( data ) {
//                 $( "#content" ).html( data );
//
//             }).done(alert( "Load was performed." ));
//             print("not home")
//         },
//
//         'books': function () {
//             print("books")
//         },
//         'login': function () {
//
//             print("login")
//         },
//         'signup': function () {
//
//             $.get("htmls/sign-up.html").then( function( data ) {
//                 $( "#content" ).html( data );
//                 alert( "Load was performed." );
//             });
//
//             print("signup")
//         }
//     })
//     .resolve();



export default router;
