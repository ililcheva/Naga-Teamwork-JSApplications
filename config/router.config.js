import Navigo from 'navigo';
import { handleHtml } from 'htmlHandler';

const router = (() => {
    const navigo = (() => {
        const root = null;
        const useHash = true; // Defaults to: false
        const hash = '#!'; // Defaults to: '#'
        return new Navigo(root, useHash, hash);
    })();

    function initRoutes() {
        navigo.on(() => { handleHtml('home','content'); }).resolve();
        navigo.on('home', () => { handleHtml('home','content'); }).resolve();
        navigo.on('page1', () => { handleHtml('page1','content'); }).resolve();
        navigo.on('page2', () => { handleHtml('page2','content'); }).resolve();
        navigo.on('page3', () => { handleHtml('page3','content'); }).resolve();
        navigo.on('signup', () => { handleHtml('signup','content'); }).resolve();
        navigo.on('login', () => { handleHtml('login','content'); }).resolve();

        //404 error
        navigo.notFound(function (query) {
            //handleHtml('error','content');
            console.log(`${query} not found 404`);
        }).resolve();


    }
    return{
        handleHtml: handleHtml,
        initRoutes: initRoutes
    }
})();

export default router;
