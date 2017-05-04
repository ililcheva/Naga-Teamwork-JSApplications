import $ from 'jquery';
import newUser from 'user-model';
import googleBook from 'book';
import { handleHtml } from 'htmlHandler';
import { hbars2 } from 'hbars';
import router from 'router';
import Handlebars from 'handlebars';

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
        $('#sfi-button').on('click', () => {
            const $input = $('#sfi-input'),
                 data = $input.val();
            $input.val('');
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
    },
    startScroll: () => {
        $('body').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    },
    displayInfo: (info) => {
        let arr = info;
        function myFunction(arg1, arg2) {
            const $blur = $('#blur');
            let index = $(arg1.target).attr('index'),
                obj = arg2[index];
            events.startScroll();
            const html = Handlebars.templates['description'](obj);
            $blur.html(html);
            events.descriptionOut();
            $blur.fadeIn();
        }
        $('#resultsInfo').on('click','#rid-button',(e) => {
            myFunction.call(this,e,arr);
        });
    },
    stopScroll: () => {
        console.log('stop');
        $('body').off('scroll touchmove mousewheel');
    },
    descriptionOut: () => {
        $('#description-close').on('click', () => {
            $('#blur').html('').fadeOut();
            events.stopScroll();
        });
    }
};

export default events;