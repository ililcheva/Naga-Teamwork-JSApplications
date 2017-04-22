import firebase from 'firebase';

const firebaseConfig = (function () {
    const config = {
        apiKey: "AIzaSyBBBLoJ7-sc6GDXBujOTWyEHrRCkkgmjlQ",
        authDomain: "naga-389d5.firebaseapp.com",
        databaseURL: "https://naga-389d5.firebaseio.com",
        projectId: "naga-389d5",
        storageBucket: "naga-389d5.appspot.com",
        messagingSenderId: "207538937146"
    };
    firebase.initializeApp(config);

    //will return db and auth
    //test with kuche
    return 'kuche';

} ());

export { firebaseConfig };


