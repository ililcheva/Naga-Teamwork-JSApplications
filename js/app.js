import 'jquery';
import router from 'router';
import { handleHtml } from 'htmlHandler';

$(document).ready(function () {
    router.initRoutes();
    handleHtml('header','header');
    handleHtml('footer','footer');

    setTimeout(loadingScreen, 1000);

    function loadingScreen() {
        $('body').removeClass('loading')
            .addClass('loaded');
    }

});
