import fire from 'firebaseConfig';
import header from 'header';

const dataBase = {
    createUser: (email,password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    },
    writeUserData: (userId, name, email) => {
        fire.database.ref('users/' + userId).set({
            username: name,
            email: email,
        });
    },
    loginUser:(email,pass) => {
        return firebase.auth().signInWithEmailAndPassword(email,pass);
    },
    checkIfLogged: () => {
        return firebase.auth().onAuthStateChanged(function(user) {
            if(user) {
                header.logged();
            } else {
                header.loggedOut();
            }
        });
    },
    logOut: () => {
        return firebase.auth().signOut();
    }

};




export default dataBase;



