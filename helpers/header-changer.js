import $ from 'jquery';
import dataBase from 'database';

const header = {
    logged: () => {
        $('#headerSignup, #headerLogin').hide();
        $('#headerLogout, #headerUser').show();
    },
    loggedOut: () => {
        $('#headerLogout, #headerUser').hide();
        $('#headerSignup, #headerLogin').show();
    },
    setUserName: () => {
        dataBase.readUserDataOnce().then((data) => {
            const userdata = data.val();
                $('#usernameSpan').text(` ${userdata.username}`).fadeIn('slow');
            }
        );
    }
};

export default header;