import $ from 'jquery';
import router from 'router';
import { handleHtml } from 'htmlHandler';
import { loadingScreen } from 'loadingScreen';

$(document).ready(function () {
    router.initRoutes();
        $.when(
            handleHtml('header','header'),
            handleHtml('footer','footer')
        )
            .done(function () {
                loadingScreen();
        });
});
