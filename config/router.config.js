import $ from 'jquery';
import Navigo from 'navigo';
import { handleHtml } from 'htmlHandler';
import accountController from 'accountController';
import carousel from 'carousel';
import loadingScreen from 'loadingScreen';

const router = (() => {
    const navigo = (() => {
        return new Navigo(null, true, '#');
    })();
    function initRoutes() {
        navigo
            .on(() => {
                loadingScreen.swapShow();
                handleHtml('home', 'content')
                    .then(carousel.init)
            })
            .on('home', () => {
                loadingScreen.swapShow();
                handleHtml('home', 'content')
                    .then(carousel.init)

            })
            .on('gallery', () => {
                loadingScreen.swapShow();
                handleHtml('books-gallery', 'content')
                    .then(loadingScreen.swapHide);
            })
            .on('search', () => {
                loadingScreen.swapShow();
                handleHtml('booksSearch', 'content')
                    .then(loadingScreen.swapHide);
                    //book controller search books
            })
            .on('signup', () => {
                loadingScreen.swapShow();
                handleHtml('signup', 'content')
                    .then(accountController.signUp)
                    .then(loadingScreen.swapHide);
            })
            .on('login', () => {
                loadingScreen.swapShow();
                handleHtml('login', 'content')
                    .then(accountController.logIn)
                    .then(loadingScreen.swapHide);
            })
            .on('logout', () => {
                    router.navigo.navigate('/home');
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