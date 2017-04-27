import $ from 'jquery';
import { handleHtml } from 'htmlHandler';

const errorHandler= (() => {
    function error(err) {
        console.log(err);
        err = err.message || err;
        $('<div/>').attr('id','errorDiv').appendTo($('.error'));
        $.when(handleHtml('error','errorDiv'))
        .then(() => {
            $('#error').html(err);
        });
    }
    return {
        error: error
    }
})();

export default errorHandler;