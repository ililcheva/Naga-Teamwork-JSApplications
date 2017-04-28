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
                $('.wrapper').hide();
                $.when(handleHtml('home', 'content'))
                    .then(() => {
                        //check log
                        //change header
                    })
                    .then(carousel.init);
            })
            .on('home', () => {
                $('.wrapper').hide();
                $.when(handleHtml('home', 'content'))
                    .then(() => {
                        //check log
                        //change header
                    })
                    .then(carousel.init);
            })
            .on('page1', () => { handleHtml('page1', 'content'); })
            .on('page2', () => { handleHtml('page2', 'content'); })
            .on('page3', () => { handleHtml('page3', 'content'); })
            .on('signup', () => {
                $.when(handleHtml('signup', 'content'))
                    .then(accountController.signUp);
            })
            .on('login', () => {
                $.when(handleHtml('login', 'content'))
                    .then(accountController.logIn);
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