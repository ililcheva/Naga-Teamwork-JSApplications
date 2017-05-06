import $ from 'jquery';
import dataBase from 'database';

const header = {
    logged: () => {
        $('#headerSignup, #headerLogin').hide();
        $('#headerLogout, #headerUser').fadeIn(600);
    },
    loggedOut: () => {
        $('#headerLogout, #headerUser').hide();
        $('#headerSignup, #headerLogin').fadeIn(600);
    },
    setUserName: () => {
        dataBase.readUserDataOnce().then( data => {
            const userdata = data.val();
            $('#usernameSpan').text(` ${userdata.username}`);
            }
        ).then(header.logged);
    }
};

export default header;