import Navigo from 'navigo';
import { handleHtml } from 'htmlHandler';
import controller from 'controller';

const router = {
    navigo:(() => {
        return new Navigo(null, true, '#');
    })(),
    initRoutes: function() {
        this.navigo
            .on(() => { handleHtml('home', 'content').then(controller.home);})
            .on('home', () => { handleHtml('home', 'content').then(controller.home);})
            .on('search', () => { handleHtml('books-search', 'content').then(controller.search);})
            .on('signup', () => { handleHtml('signup', 'content').then(controller.signUp);})
            .on('login', () => { handleHtml('login', 'content').then(controller.logIn);})
            .on('userpage', () => { handleHtml('userpage', 'content').then(controller.userPage);})
            .on('about', () => { handleHtml('about', 'content').then(controller.about);})
            .on('logout', () => { controller.logOut();}).resolve();
        this.navigo.notFound(() => {handleHtml('error', 'content').then(controller.notFound);}).resolve();
    }
};

export default router;