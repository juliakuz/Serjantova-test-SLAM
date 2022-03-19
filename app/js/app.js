$(document).ready(function(){
        // Init slider:
    $('.slider_top .slider__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 50000,
        arrows: true,
        pauseOnHover: true,
        lazyLoad: 'ondemand'
    });

    $('.slider_product .slider__wrapper').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            lazyLoad: 'ondemand',
            responsive: [
                {
                    breakpoint: 1919,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });

    function dotsLimit() {

        let dots = $('.slider_product .slider__wrapper li');

        //вешаем обработчик на наши точки
        dots.click(function () {
            let $this = $(this);
            dots.removeClass('before after');
            //отображаем 2 предыдущие точки
            $this
                .prev().addClass('before')
                .prev().addClass('before');
            //отображаем 2 следующие точки
            $this
                .next().addClass('after')
                .next().addClass('after');

            //если мы в самом начале - добавляем пару последующих точек
            if (!$this.prev().length) {
                $this.next().next().next()
                    .addClass('after').next()
                    .addClass('after');
            }
            //на 2й позиции - добавляем одну точку
            if (!$this.prev().prev().length) {
                $this.next().next().next()
                    .addClass('after');
            }
            //в самом конце - добавляем пару доп. предыдущих точек
            if (!$this.next().length) {
                $this.prev().prev().prev()
                    .addClass('before').prev()
                    .addClass('before');
            }
            //предпоследний элемента - добавляем одну пред. точку
            if (!$this.next().next().length) {
                $this.prev().prev().prev()
                    .addClass('before');
            }
        });

        // do click on 1st point
        dots.eq(0).click();
    }

    dotsLimit();

    $(window).resize(function() {
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function(){
            console.log('Resized finished.');
            dotsLimit();
        }, 250);
    });
});