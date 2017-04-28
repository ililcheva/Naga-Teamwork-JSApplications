import $ from 'jquery';
import router from 'router';
import errorHandler from 'errorHandler';
import newUser from 'user-model';

const accountController = {
    signUp: () => {
        let $form = $('#signup');
        $form.on('submit', function (e) {
            e.preventDefault();
            const data = $form.serializeArray();
                newUser.signUp(data).catch((err)=>{ errorHandler.error(err);}).then(router.navigo.navigate('/home'));
            });
        }
    };


export default accountController;