//fb is exposed globally --- have to fix that
class User {
    signIn(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

        });
    }

}
const newUser = new User;
export default newUser;