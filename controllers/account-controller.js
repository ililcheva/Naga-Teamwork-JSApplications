import $ from 'jquery';
import newUser from 'user-model';

const accountController = {
    signUp: () => {
        let $form = $('#signup');
        $form.on('submit', function (e) {
            e.preventDefault();
            const data = $form.serializeArray();
            newUser.signUp(data);
        });
    },
    logIn: () => {
        console.log('login is here');
        let $form = $('#login');
        console.log($form);
        $form.on('submit', function (e) {
            e.preventDefault();
            const data = $form.serializeArray();
            newUser.logIn(data);
        });
    }
};

export default accountController;