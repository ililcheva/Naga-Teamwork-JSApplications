import $ from 'jquery';
import router from 'router';
import { handleHtml } from 'htmlHandler';

$(document).ready(function () {
        $.when(router.initRoutes(),handleHtml('header','header'),handleHtml('header','header'))
            .then(function () {
                setTimeout(delayLoad, 1900);
               function delayLoad() {
                   $('.loader').removeClass('loader')
                       .addClass('loaderout');
                   $('body').removeClass('loading')
                       .addClass('loaded');
                   $('.hop').css('display','none');

               }
        });
});
