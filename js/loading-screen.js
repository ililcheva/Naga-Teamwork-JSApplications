import 'jquery';
import dataBase from 'database';

const loadingScrin = (() => {
   const $allSiteContainer = $('#all-site-container');
   const $animationContainer = $('#animationContainer');

    function show() {
        $allSiteContainer.hide();
        $animationContainer.fadeIn('slow');
    }
    function hide() {
        setTimeout(() => {
            $animationContainer.fadeOut();
            $allSiteContainer.fadeIn(1000);
        },2000);
    }

    return {
        show: show,
        hide: hide
    }
})();

export default loadingScrin;