import $ from 'jquery';
import { handleHtml } from 'htmlHandler';

const errorHandler = {
    error: (err) => {
        console.log(err);
        err = err.message || err;
        let $container = $('#errorDiv');
        $container.children().html(err);
        $container.fadeIn(1000);
    }
};
export default errorHandler;