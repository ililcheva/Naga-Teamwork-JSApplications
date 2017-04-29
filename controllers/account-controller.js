import newUser from 'user-model';
import events from 'events';

const accountController = {
    signUp: () => {
        events.signUpForm();
    },
    logIn: () => {
        events.logInForm()
    },
    logOut: () => {
        newUser.logOut();
    },
};

export default accountController;