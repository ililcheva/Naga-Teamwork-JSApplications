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
                $.when(handleHtml('home','content'))
                    .then(carousel.init);})
        .on('home', () => {
                $.when(handleHtml('home','content'))
                    .then(carousel.init);
            })
        .on('page1', () => { handleHtml('page1','content'); })
        .on('page2', () => { handleHtml('page2','content'); })
        .on('page3', () => { handleHtml('page3','content'); })
        .on('signup', () => {
                $.when(handleHtml('signup','content'))
                    .then(accountController.signUp);
            })
        .on('login', () => { handleHtml('login','content'); })
        .resolve();

        //404 error
        navigo.notFound((query) => {
            //handleHtml('error','content');
            console.log(`${query} not found 404`);
        }).resolve();
    }

    return{
        handleHtml: handleHtml,
        initRoutes: initRoutes,
    }
})();

export default router;
