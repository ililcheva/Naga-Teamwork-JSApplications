import $ from 'jquery';
import { handleHtml } from 'htmlHandler';

const errorHandler = {
    error: (err) => {
        err = err.message || err;
        let $container = $('#errorDiv');
        $container.children().html(err);
        $container.fadeIn(1000);
        setTimeout(() => {
            $container.fadeOut(400);
        },2000);
    }
};
export default errorHandler;