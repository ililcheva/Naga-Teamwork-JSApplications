import firebaseDb from 'firebaseConfig';
import errorHandler from 'errorHandler'

const dataBase = {
    createUser: (email,password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    },
    writeUserData: (userId, name, email) => {
        firebaseDb.ref('users/' + userId).set({
            username: name,
            email: email,
        });
    },
    loginUser:(email,pass) => {
        firebaseDb.auth().signInWithEmailAndPassword(email,pass);
    },
    checkIfLogged: () => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                return user;
            } else {
                return false;
            }
        });
    }

};




export default dataBase;



