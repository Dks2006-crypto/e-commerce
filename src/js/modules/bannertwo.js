import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

function popalarSlider(){
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 5000
        },
        navigation: {
            prevEl: '.popular__slider-btn--prev',
            nextEl: '.popular__slider-btn--next',
        },
    });
}

export default popalarSlider;