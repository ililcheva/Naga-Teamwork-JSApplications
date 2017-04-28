import 'jquery';

function loadingScreen() {
    setTimeout(delayLoad, 1500);
    function delayLoad() {
        $('#loadingContainer').fadeOut();
        $('#loader').fadeIn('slow');
    }
}

export { loadingScreen };