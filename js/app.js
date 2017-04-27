import $ from 'jquery';
import router from 'router';
import { handleHtml } from 'htmlHandler';
import { loadingScreen } from 'loadingScreen';

$(document).ready(function () {
        $.when(
            router.initRoutes(),
            handleHtml('header','header'),
            handleHtml('footer','footer')
        )
            .done(function () {
                loadingScreen();
        });


});
