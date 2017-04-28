import $ from 'jquery';
import { handleHtml } from 'htmlHandler';

const errorHandler= (() => {
    function error(err) {
        console.log(err);
        err = err.message || err;
        let $container = $('#errorDiv');
        $container.children().html(err);
        $container.fadeIn('slow');
    }
    return {
        error: error
    }
})();

export default errorHandler;