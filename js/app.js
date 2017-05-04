import $ from 'jquery';
import router from 'router';
import { handleHtml } from 'htmlHandler';
import  loadingScreen  from 'loadingScreen';
import dataBase from 'database';
import carousel from 'carousel';
import events from 'events';


$(document).ready(() => {

    router.initRoutes();
    $.when(handleHtml('header','header'), handleHtml('footer','footer'))
        .then(loadingScreen.swapShow)
        .then(dataBase.checkIfLogged)
        .then(events.headerSearch)
        .then(carousel.init)
        .then(loadingScreen.show)
        .then(loadingScreen.swapHide);

});
