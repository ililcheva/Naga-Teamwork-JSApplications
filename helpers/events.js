import $ from 'jquery';
import newUser from 'user-model';
import googleBook from 'book';

const events = {
    signUpForm: () => {
        const $form = $('#signup');
        $form.on('submit', function (e) {
            e.preventDefault();
            const data = $form.serializeArray();
            newUser.signUp(data);
        });
    },
    logInForm: () => {
        const $form = $('#logIn');
        $form.on('submit', function (e) {
            e.preventDefault();
            const data = $form.serializeArray();
            newUser.logIn(data);
        });
    },
    collapseMenu: (() => {
        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') ) {
                $(this).collapse('hide');
            }
        });
    })(),
    bookSearch: () => {
        $('#search-button').on('click', () => {
            const data = $('#book-input').val();
            googleBook.search(data);
        })
    },
    windowScroll: (() => {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
                $('#return-to-top').fadeIn(200);    // Fade in the arrow
            } else {
                $('#return-to-top').fadeOut(200);   // Else fade out the arrow
            }
        });
        $('#return-to-top').click(function() {      // When arrow is clicked
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 500);
        });
    })(),
};

export default events;