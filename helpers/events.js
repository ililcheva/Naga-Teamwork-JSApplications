import $ from 'jquery';
import newUser from 'user-model';
import googleBook from 'book';
import { handleHtml } from 'htmlHandler';
import router from 'router';

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
    headerSearch: () => {
        $('#header-button').on('click',() => {
            const $headerInput = $('#header-input'), $value = $headerInput.val();
            router.navigo.navigate('/search');
            $headerInput.val('');
            googleBook.search($value);
        });
    }
};

export default events;