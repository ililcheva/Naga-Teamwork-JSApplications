import Navigo from 'navigo';
import { handleHtml } from 'htmlHandler';
import carousel from 'carousel';
import loadingScreen from 'loadingScreen';
import events from 'events';
import newUser from 'user-model';

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
                    .then(loadingScreen.swapHide);
            })
            .on('home', () => {
                loadingScreen.swapShow();
                handleHtml('home', 'content')
                    .then(carousel.init)
                    .then(loadingScreen.swapHide);

            })
            .on('gallery', () => {
                loadingScreen.swapShow();
                handleHtml('books-gallery', 'content')
                    .then(loadingScreen.swapHide);
            })
            .on('search', () => {
                loadingScreen.swapShow();
                handleHtml('books-search', 'content')
                    .then(events.bookSearch)
                    .then(loadingScreen.swapHide);
            })
            .on('signup', () => {
                loadingScreen.swapShow();
                handleHtml('signup', 'content')
                    .then(events.signUpForm)
                    .then(loadingScreen.swapHide);
            })
            .on('login', () => {
                loadingScreen.swapShow();
                handleHtml('login', 'content')
                    .then(events.logInForm)
                    .then(loadingScreen.swapHide);
            })
            .on('logout', () => {
                    router.navigo.navigate('/home');
                    newUser.logOut();
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