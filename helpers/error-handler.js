import $ from 'jquery';
import { handleHtml } from 'htmlHandler';

const errorHandler= (() => {
    function error(err) {
        console.log(err);
        err = err.message || err;
        let container = $('<div/>').attr('id','errorDiv').hide();
            container.appendTo($('.error'));
        $.when(handleHtml('error','errorDiv'))
            .then(() => { $('#error').html(err); })
            .then(() => { container.fadeIn()});
    }
    return {
        error: error
    }
})();

export default errorHandler;