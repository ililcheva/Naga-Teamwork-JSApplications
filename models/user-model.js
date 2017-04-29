import dataBase from 'database';
import router from 'router';
import errorHandler from 'errorHandler';
import validator from 'validator';
import header from 'header';

class User {
    signUp(data) {
        const name = data[0].value, email = data[1].value, password = data[2].value;
        const validate = new Promise(() => { validator.validateEmail(data);});
        validate
            .catch((err) => {errorHandler.error(err);})
            .then(dataBase.createUser(email,password)
                .then(() => { dataBase.writeUserData({username: name, email: email});})
                .then(router.navigo.navigate('/home'))
                .catch( err => {errorHandler.error(err);}));
    };
    logIn(data){
        const email = data[0].value, password = data[1].value;
        const validate = new Promise(() => { validator.validateEmail(email);});
        validate
            .catch((err) => {errorHandler.error(err);})
            .then(dataBase.loginUser(email,password)
                .then(() => { router.navigo.navigate('/home'); })
                .catch( err => {errorHandler.error(err);}));
    }
    logOut(){
         dataBase.logOut()
             .then(() => { header.loggedOut(); router.navigo.navigate('/home');})
             .catch((err) => { errorHandler.error(err); })

    }
}

const newUser = new User;
export default newUser;