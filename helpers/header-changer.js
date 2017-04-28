import $ from 'jquery';

const header = {
    logged: () => {
        $('#headerSignup').hide();
        $('#headerLogin').hide();
        $('#headerLogout').show();
        $('#headerUser').show();
    },
    loggedOut: () => {
        $('#headerLogout').hide();
        $('#headerUser').hide();
        $('#headerSignup').show();
        $('#headerLogin').show();
    }
};

export default header;