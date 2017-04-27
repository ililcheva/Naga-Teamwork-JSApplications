import $ from 'jquery';
import newUser from 'user-model';
import validator from 'validator';

const accountController = {
    signUp: () => {
        let $form = $('#signup');
        $form.on('submit', function (e) {
            e.preventDefault();
            const data = $form.serializeArray();
             try {
                 validator.validateSignUpForm(data);
             } catch(err) {
                 function createPopUpError(err) {
                     let content = $('#content'),
                         popUp = $('<div><h1></h1></div>');
                     popUp.children().html(err);
                     content.fadeOut();
                     $(content).after(popUp);
                 }
                 createPopUpError(err);
             }

            newUser.signUp(data);
        });
    }
};

export default accountController;