import firebase from 'firebase';

const fire = (function () {
    const config = {
        apiKey: "AIzaSyBBBLoJ7-sc6GDXBujOTWyEHrRCkkgmjlQ",
        authDomain: "naga-389d5.firebaseapp.com",
        databaseURL: "https://naga-389d5.firebaseio.com",
        projectId: "naga-389d5",
        storageBucket: "naga-389d5.appspot.com",
        messagingSenderId: "207538937146"
    };
    firebase.initializeApp(config);
    return {
        database: firebase.database(),
        auth: firebase.auth()
    }

} ());

export default fire;


