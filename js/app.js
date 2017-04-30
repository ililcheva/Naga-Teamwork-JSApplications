import $ from 'jquery';
import router from 'router';
import { handleHtml } from 'htmlHandler';
import  loadingScreen  from 'loadingScreen';
import dataBase from 'database';
import carousel from 'carousel';


$(document).ready(() => {

    router.initRoutes();
    $.when(handleHtml('header','header'), handleHtml('footer','footer'),handleHtml('home', 'content'))
        .then(loadingScreen.swapShow)
        .then(dataBase.checkIfLogged)
        .then(carousel.init)
        .then(loadingScreen.show);
});
