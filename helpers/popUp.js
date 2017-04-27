import $ from 'jquery';
import { handleHtml } from 'htmlHandler';

const popUp= (() => {
    function error(err) {
        $.when(handleHtml('popError','content'))
        .then(()=>{
            $('#error').html(err);
        });
    }
    return {
        error: error
    }
})();

export default popUp;