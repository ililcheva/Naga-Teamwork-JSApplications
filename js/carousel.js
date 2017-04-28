import $ from 'jquery';
import 'owl-carousel';

const carousel = {
    init: () => {
        console.log('zaredi');
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
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
    }
};


export default carousel;

