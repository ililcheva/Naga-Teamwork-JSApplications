import firebase from 'firebase';

function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}


let data = (function () {
    const database = firebase.database();
    return database;
})();

export { data };




