import Navigo from 'navigo';
import { handleHtml } from 'htmlHandler';
import carousel from 'carousel';
import events from 'events';
import newUser from 'user-model';
import googleBook from 'book';
import loadingScreen from 'loadingScreen';

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
                        googleBook.updateComments();
                        events.postComment();
                        loadingScreen.containerShow();
                    })
            })
            .on('home', () => {
                handleHtml('home', 'content')
                    .then(() => {
                        carousel.init();
                        googleBook.updateComments();
                        events.postComment();
                        loadingScreen.containerShow();
                    })
            })
            .on('search', () => {
                handleHtml('books-search', 'content')
                    .then(() => {
                        events.bookSearch();
                        loadingScreen.containerShow();
                    })
            })
            .on('signup', () => {
                handleHtml('signup', 'content')
                    .then(() => {
                        events.signUpForm();
                        loadingScreen.containerShow();
                    })
            })
            .on('login', () => {
                handleHtml('login', 'content')
                    .then(() => {
                        events.logInForm();
                        loadingScreen.containerShow();
                    })

            })
            .on('userpage', () => {
                handleHtml('userpage', 'content')
                    .then(() => {
                        newUser.getBooks();
                        events.changeTheme();
                        loadingScreen.containerShow();
                    }) //load user data
            })
            .on('about', () => {
                handleHtml('about', 'content')
                    .then(loadingScreen.containerShow);
            })
            .on('logout', () => {
                    router.navigo.navigate('/home');
                    newUser.logOut();
                    loadingScreen.containerShow();
            })
            .resolve();

        //404 error
        navigo.notFound(() => {
            handleHtml('error', 'content')
                .then(loadingScreen.containerShow);
        }).resolve();
    }
    return {
        navigo: navigo,
        initRoutes: initRoutes,
    }
})();

export default router;