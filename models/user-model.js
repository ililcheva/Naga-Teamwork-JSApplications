import firebase from 'firebase';
import errorHandler from 'errorHandler';
import validator from 'validator';


class User {
    signUp(data) {
        try {
            validator.validateSignUpForm(data);
            const email = data[1].value;
            const password = data[2].value;
            firebase.auth().createUserWithEmailAndPassword(email, password).catch((err) => {
                errorHandler.error(err.message);
            });
        } catch(err) {
            errorHandler.error(err);
        }
    };

    login(data){
        //login
    }
}


const newUser = new User();
export default newUser;