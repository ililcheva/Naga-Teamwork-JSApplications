import 'jquery';
import dataBase from 'database';


function loadingScreen() {
    dataBase.checkIfLogged().then(setTimeout(delayLoad, 1500));
    function delayLoad() {
        $('#loadingContainer').fadeOut();
        $('#loader').fadeIn('slow');
    }
}

export { loadingScreen };