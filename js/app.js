import router from 'router';
import  loadingScreen  from 'loadingScreen';
import dataBase from 'database';
import carousel from 'carousel';
import events from 'events';

$(document).ready(() => {
    router.initRoutes();
    loadingScreen.swapShow();
    dataBase.checkIfLogged();
    events.headerSearch();
    carousel.init();
    loadingScreen.show();
    loadingScreen.swapHide();
});
