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

export default router;
