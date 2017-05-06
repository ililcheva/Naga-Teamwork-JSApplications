import $ from 'jquery';
import newUser from 'user-model';
import googleBook from 'book';
import { handleHtml } from 'htmlHandler';
import router from 'router';
import Handlebars from 'handlebars';
import dataBase from 'database';
import booksFilter from 'booksFilter'
import 'bootstrap-js';

const events = {
    signUpForm: () => {
        const $form = $('#signup');
        $form.on('submit', e => {
            e.preventDefault();
            const data = $form.serializeArray();
            newUser.signUp(data);
        });
    },
    logInForm: () => {
        const $form = $('#logIn');
        $form.on('submit', e => {
            e.preventDefault();
            const data = $form.serializeArray();
            newUser.logIn(data);
        });
    },
    collapseMenu: (() => {
        $(document).on('click','.navbar-collapse.in',e => {
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
        $(window).scroll(() => {
            if ($(this).scrollTop() >= 50) {
                $('#return-to-top').fadeIn(200);
            } else {
                $('#return-to-top').fadeOut(200);
            }
        });
        $('#return-to-top').click(() => {
            $('body,html').animate({
                scrollTop : 0
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
        $('body').on('scroll touchmove mousewheel', e => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    },
    inSearchDescription: () => {
        $('#resultsInfo').on('click.displayInfo','.rid-button',e => {
            const $blur = $('#blur');
            let id = $(e.target).attr('index1'),
                obj = booksFilter.filteredData.find( element => {
                    return element.id === id;
                });
            events.startScroll();
            const html = Handlebars.templates['description'](obj);
            $blur.html(html);
            events.descriptionOut();
            $blur.fadeIn();
        });
    },
    userInfoDescription: (data) => {
        $('#resultsInfo').on('click.displayUserInfo','.rid-button',e => {
            const $blur = $('#blur');
            let id = $(e.target).attr('index1'),
            obj = data.find( element => {
                return element.id === id;
            });
            events.startScroll();
            const html = Handlebars.templates['description'](obj);
            $blur.html(html);
            events.descriptionOut();
            $blur.fadeIn();
        });
    },
    stopScroll: () => {
        $('body').off('scroll touchmove mousewheel');
    },
    descriptionOut: () => {
        $('.description-close').on('click', () => {
            $('#blur').html('').fadeOut();
            events.stopScroll();
        });
    },
    addUserInfo: () => {
        $('#resultsInfo').on('click.addBook','.add-button',e => {
            let $target = e.target;
            let index = $($target).attr('index2'),
                obj = booksFilter.filteredData.find(element => {
                    return element.id === index;
                });
            newUser.addBook(obj);
            $($target).html('book added');
            $($target).removeClass('add-button').addClass('added-button');
        })
    },
    removeBook: () => {
        $('#resultsInfo').on('click.removeItem','.remove-button',e => {
            let $target = e.target;
            let id = $($target).attr('index2');
            dataBase.removeNode(id);
            $($target).parents('.col-lg-3').remove();
        });
    },
    postComment: () => {
        console.log('attached');
        $('#comment-button').on('click.postComment', () => {
            const $commentInput = $('#comment-input'),
                comment = $commentInput.val();
            $commentInput.val('');
            if(comment !== ''){
                googleBook.comment(comment);
            }
        })
    }
};

export default events;