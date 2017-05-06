import fire from 'firebaseConfig';
import header from 'header';
import $ from 'jquery';

const dataBase = {
    createUser: (email,password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    },
    writeUserData: (data) => {
        const user = firebase.auth().currentUser,
            userId = user.uid;
        return fire.database.ref('users/' + userId).set(data);
    },
    readUserDataOnce: (path) => {
        path = path || '';
        const user = firebase.auth().currentUser;
        if(user !== null){
            const userId = user.uid;
            return fire.database.ref('users/' + userId + '/' + path).once('value');
        } else {
            return Promise.resolve(false);
        }
    },
    updateUserData: (data) => {
        const user = firebase.auth().currentUser;
        if(user === null){
            throw 'You are not logged in';
        }
        const userId = user.uid;
        fire.database.ref('users/' + userId).update(data);
    },
    loginUser:(email,pass) => {
        return firebase.auth().signInWithEmailAndPassword(email,pass);
    },
    checkIfLogged: () => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                header.setUserName();
            } else {
                header.loggedOut();
            }
        });
    },
    logOut: () => {
        return firebase.auth().signOut();
    },
    removeNode: (id) => {
        const user = firebase.auth().currentUser,
            userId = user.uid;
        fire.database.ref('users/' + userId + '/books/' + id).remove();
    }

};




export default dataBase;



