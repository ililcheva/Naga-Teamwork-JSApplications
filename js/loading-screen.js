import 'jquery';

function loadingScreen() {
    setTimeout(delayLoad, 1500);
    function delayLoad() {
        $('.loader').removeClass('loader')
            .addClass('loaderout');
        $('body').removeClass('loading')
            .addClass('loaded');
        $('.hop').css('display','none');
    }
}

export { loadingScreen };