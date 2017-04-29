import fire from 'firebaseConfig';
import header from 'header';

const dataBase = {
    createUser: (email,password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    },
    writeUserData: (data) => {
        const user = firebase.auth().currentUser,
            userId = user.uid;
        return fire.database.ref('users/' + userId).set(data);
    },
    readUserDataOnce: () => {
        const userId = firebase.auth().currentUser.uid;
        return fire.database.ref('/users/' + userId).once('value');
    },
    updateUserData: () => {
        //coming soon
    },
    loginUser:(email,pass) => {
        return firebase.auth().signInWithEmailAndPassword(email,pass);
    },
    checkIfLogged: () => {
        return new Promise(() => {
            firebase.auth().onAuthStateChanged((user) => {
                if(user) {
                    header.setUserName();
                    header.logged();
                } else {
                    header.loggedOut();
                }
            });
        });
    },
    logOut: () => {
        return firebase.auth().signOut();
    }

};




export default dataBase;



