import 'jquery';

const loadingScreen = (() => {
   const $allSiteContainer = $('#all-site-container');
   const $pageSwap = $('#pageSwap');
   const $content = $('#content');

    function contentShow() {
        setTimeout(() => {
            $allSiteContainer.fadeIn(1000);
        },1000);
    }
    function pageSwapShow() {
        $content.hide();
        $pageSwap.fadeIn('slow');
    }
    function pageSwapHide() {
        setTimeout(() => {
            $pageSwap.hide();
            $content.fadeIn(500);
        },2000);
    }

    return {
        show: contentShow,
        swapShow: pageSwapShow,
        swapHide: pageSwapHide
    }
})();

export default loadingScreen;