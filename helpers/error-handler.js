import $ from 'jquery';
import { handleHtml } from 'htmlHandler';

const errorHandler = {
    error: (err) => {
        err = err.message || err;
        let $container = $('#error-container');
        $container.children().html(err);
        $container.fadeIn(1000);
        setTimeout(() => {
            $container.hide();
        },3000);
    }
};
export default errorHandler;