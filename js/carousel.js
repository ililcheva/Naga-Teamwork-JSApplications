import $ from 'jquery';
import 'owl-carousel';

const carousel = {
    init: () => {
            let $owl = $('.owl-carousel');

        $owl.on({
            'initialized.owl.carousel': function () {
                setTimeout(()=>{$('#content').fadeIn()},1500);
            }
        }).owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
        $owl.trigger('refresh.owl.carousel');
    }
};


export default carousel;

