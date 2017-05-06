import Navigo from 'navigo';
import { handleHtml } from 'htmlHandler';
import carousel from 'carousel';
import events from 'events';
import newUser from 'user-model';
import googleBook from 'book'

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
                    });
            })
            .on('home', () => {
                handleHtml('home', 'content')
                    .then(() => {
                        carousel.init();
                        googleBook.updateComments();
                        events.postComment();
                    })
            })
            .on('search', () => {
                handleHtml('books-search', 'content')
                    .then(() => {
                        events.bookSearch();
                    })
            })
            .on('signup', () => {
                handleHtml('signup', 'content')
                    .then(events.signUpForm)
            })
            .on('login', () => {
                handleHtml('login', 'content')
                    .then(events.logInForm)
            })
            .on('userpage', () => {
                handleHtml('userpage', 'content')
                    .then(newUser.getBooks) //load user data
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
        initRoutes: initRoutes,
    }
})();

export default router;