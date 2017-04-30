import 'jquery';

const loadingScreen = (() => {
   const $allSiteContainer = $('#all-site-container');
   const $pageSwap = $('#pageSwap');
   const $content = $('#content');

    function contentShow() {
        console.log('4');
        setTimeout(() => {
            $allSiteContainer.fadeIn(1000);
        },1000);
    }
    function pageSwapShow() {
        console.log('1');
        $content.hide();
        $pageSwap.fadeIn('slow');
    }
    function pageSwapHide() {
        setTimeout(() => {
            $pageSwap.hide();
            $content.fadeIn(500);
        },1500);
    }

    return {
        show: contentShow,
        swapShow: pageSwapShow,
        swapHide: pageSwapHide
    }
})();

export default loadingScreen;