import $ from 'jquery';

const accountController = {
    signUp: () => {
        let $form = $('#signup');
        $form.on('submit', function (e) {
            e.preventDefault();
            const data = $form.serializeArray();
            console.log(data[0].name);
        });
    }
};

export default accountController;