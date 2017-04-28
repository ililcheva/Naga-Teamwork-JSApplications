import dataBase from 'database';
import router from 'router';
import errorHandler from 'errorHandler';
import validator from 'validator';

class User {
    signUp(data) {
        const username = data[0].value,
            email = data[1].value,
            password = data[2].value;
        try {
            validator.validateSignUpForm(data);
            dataBase.createUser(email,password)
                .then(() => {
                    router.navigo.navigate('/home');
                })
                .catch((err) => {
                    errorHandler.error(err);
                });
        } catch(err) {
            errorHandler.error(err);
        }
    };
    login(data){
        const email = data[1].value,
            password = data[2].value;
        try {
            validator.validateEmail(email);
            dataBase.loginUser(email, password)
                .then(() => {
                    router.navigo.navigate('/home');
                })
                .catch((err) => {
                    errorHandler.error(err);
                });
        } catch(err) {
            errorHandler.error(err);
        }
    }
}


const newUser = new User();
export default newUser;