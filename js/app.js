import $ from 'jquery';
import router from 'router';
import { handleHtml } from 'htmlHandler';
import  loadingScrin  from 'loadingScreen';
import dataBase from 'database';
import carousel from 'carousel';


$(document).ready(() => {
    router.initRoutes();
    $.when(handleHtml('header','header'), handleHtml('footer','footer'))
        .then(dataBase.checkIfLogged)
        .then(carousel.init)
        .then(loadingScrin.hide);
});
