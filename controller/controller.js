import router from 'router';
import { handleHtml } from 'htmlHandler';
import carousel from 'carousel';
import events from 'events';
import newUser from 'user-model';
import googleBook from 'book';
import loadingScreen from 'loadingScreen';


let controller = {
    home: () => {
        carousel.init();
        googleBook.updateComments();
        events.postComment();
        loadingScreen.containerShow();
    },
    search: () => {
        events.bookSearch();
        loadingScreen.containerShow();
    },
    signUp: () => {
        events.signUpForm();
        loadingScreen.containerShow();
    },
    logIn: () => {
        events.logInForm();
        loadingScreen.containerShow();
    },
    userPage: () => {
        newUser.getBooks();
        events.changeTheme();
        loadingScreen.containerShow();
    },
    about: () => {
        loadingScreen.containerShow();
    },
    logOut: () => {
        router.navigo.navigate('/home');
        newUser.logOut();
        loadingScreen.containerShow();
    },
    notFound: () => {
        loadingScreen.containerShow();
    }
};

export default controller;