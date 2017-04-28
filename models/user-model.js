import dataBase from 'database';
import errorHandler from 'errorHandler';
import validator from 'validator';

class User {
    signUp(data) {
        const username = data[0].value,
            email = data[1].value,
            password = data[2].value;
        try {
            validator.validateSignUpForm(data);
            return dataBase.createUser(email,password);
        } catch(err) {
            errorHandler.error(err);
        }
    };
    login(data){
        const email = data[1].value,
            password = data[2].value;
        dataBase.loginUser(email, password);
    }
}


const newUser = new User();
export default newUser;