import 'jquery';
import router from 'router';

$(document).ready(function () {
    router.initRoutes();
    router.handleHtml('header','header');
    router.handleHtml('footer','footer');
    $('body').removeClass('loading')
           .addClass('loaded');
});
