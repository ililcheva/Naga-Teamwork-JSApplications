import $ from 'jquery';
import router from 'router';
import { handleHtml } from 'htmlHandler';

$(document).ready(function () {
        $.when(
            router.initRoutes(),
            handleHtml('header','header'),
            handleHtml('footer','footer')
        )
            .done(function () {
                setTimeout(delayLoad, 1800);
               function delayLoad() {
                   $('.loader').removeClass('loader')
                       .addClass('loaderout');
                   $('body').removeClass('loading')
                       .addClass('loaded');
                   $('.hop').css('display','none');
               }
        });
});
