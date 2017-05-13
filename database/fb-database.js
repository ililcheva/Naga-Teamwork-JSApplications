import fire from 'firebaseConfig';
import header from 'header';

const dataBase = {
    createUser: (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password),
    writeUserData: (data) => {
        const user = firebase.auth().currentUser;
        const userId = user.uid;
        return fire.database.ref('users/' + userId).set(data);
    },
    readUserDataOnce: (path) => {
        path = path || '';
        const user = firebase.auth().currentUser;
        let userId;
        if (user !== null) {
            userId = user.uid;
            return fire.database.ref(`users/${userId}/${path}`).once('value');
        }
        return Promise.resolve(false);
    },
    readDataOnce: (path) => {
        path = path || '';
        return fire.database.ref(path).once('value');
    },
    updateData: (path, data) => {
        path = path || '';
        const newPostKey = fire.database.ref().child(path).push().key;
        return fire.database.ref(`/${path}/${newPostKey}`).update(data);
    },
    updateUserData: (data) => {
        const user = firebase.auth().currentUser;
        if (user === null) {
            throw 'You are not logged in';
        }
        const userId = user.uid;
        fire.database.ref('users/' + userId).update(data);
    },
    loginUser:(email, pass) => firebase.auth().signInWithEmailAndPassword(email, pass),
    checkIfLogged: () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                header.setTheme();
                header.setUserName();
            } else {
                header.setDefaultTheme();
                header.loggedOut();
            }
        });
    },
    logOut: () => firebase.auth().signOut(),
    removeNode: (id) => {
        const user = firebase.auth().currentUser;
        const userId = user.uid;
        fire.database.ref('users/' + userId + '/books/' + id).remove();
    },
};

export default dataBase;



