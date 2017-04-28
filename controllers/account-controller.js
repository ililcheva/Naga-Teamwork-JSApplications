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
        let $form = $('#logIn');
        $form.on('submit', function (e) {
            e.preventDefault();
            const data = $form.serializeArray();
            newUser.logIn(data);
        });
    },
    logOut: () => {
        newUser.logOut();
    }
};

export default accountController;