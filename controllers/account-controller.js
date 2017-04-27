import $ from 'jquery';
import newUser from 'user-model';
import validator from 'validator';
import popUp from 'popUp';

const accountController = {
    signUp: () => {
        let $form = $('#signup');
        $form.on('submit', function (e) {
            e.preventDefault();
            const data = $form.serializeArray();
             try {
                 validator.validateSignUpForm(data);
             } catch(err) {
                 popUp.error(err);
             }
            newUser.signUp(data);
            $form.off('submit');
        });
    }
};

export default accountController;