import 'jquery';

const loadingScreen = (() => {
   const $allSiteContainer = $('#all-site-container');
   const $pageSwap = $('#pageSwap');
   const $content = $('#content');

    function contentShow() {
        $allSiteContainer.fadeIn(500);
    }
    function pageSwapShow() {
        $content.hide();
        $pageSwap.fadeIn('slow');
    }
    function pageSwapHide() {
            $pageSwap.hide();
            $content.fadeIn(500);
    }
    return {
        show: contentShow,
        swapShow: pageSwapShow,
        swapHide: pageSwapHide
    }
})();

export default loadingScreen;