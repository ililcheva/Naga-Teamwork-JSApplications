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
                handleHtml('home', 'content')
                    .then(() => {
                        carousel.init();
                    });
            })
            .on('home', () => {
                handleHtml('home', 'content')
                    .then(() => {
                        carousel.init();
                    })
            })
            .on('search', () => {
                handleHtml('books-search', 'content')
                    .then(() => {
                        events.bookSearch();
                    })
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
            .on('userpage', () => {
                loadingScreen.swapShow();
                handleHtml('userpage', 'content')
                    .then(newUser.getBooks) //load user data
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