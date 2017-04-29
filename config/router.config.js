import $ from 'jquery';
import Navigo from 'navigo';
import { handleHtml } from 'htmlHandler';
import accountController from 'accountController';
import carousel from 'carousel';

const router = (() => {
    const navigo = (() => {
        return new Navigo(null, true, '#');
    })();
    function initRoutes() {
        navigo
            .on(() => {
            $('#content').hide();
                handleHtml('home', 'content')
                    .then(carousel.init)
            })
            .on('home', () => {
                $('#content').hide();
                handleHtml('home', 'content')
                    .then(carousel.init)
            })
            .on('gallery', () => { handleHtml('books-gallery', 'content'); })
            .on('search', () => { handleHtml('booksSearch', 'content');
                    //book controller search books
            })
            .on('signup', () => {
                handleHtml('signup', 'content')
                    .then(accountController.signUp);
            })
            .on('login', () => {
                handleHtml('login', 'content')
                    .then(accountController.logIn);
            })
            .on('logout', () => {
                    accountController.logOut();
            })
            .resolve();

        //404 error
        navigo.notFound(() => {
            handleHtml('error', 'content');
        }).resolve();
    }

    return {
        navigo: navigo,
        handleHtml: handleHtml,
        initRoutes: initRoutes,
    }
})();

export default router;