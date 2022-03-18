$(document).ready(function(){
    //инициализируем слайдер
    $('.slider_product .slider__wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true
    });
    $('.slider_top .slider__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });
    var dots = $('.slider_product .slider__wrapper li');
    //вешаем обработчик на наши точки
    dots.click(function(){
        var $this = $(this);
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
        if(!$this.prev().length) {
            $this.next().next().next()
                .addClass('after').next()
                .addClass('after');
        }
        //на 2й позиции - добавляем одну точку
        if(!$this.prev().prev().length) {
            $this.next().next().next()
                .addClass('after');
        }
        //в самом конце - добавляем пару доп. предыдущих точек
        if(!$this.next().length) {
            $this.prev().prev().prev()
                .addClass('before').prev()
                .addClass('before');
        }
        //предпоследний элемента - добавляем одну пред. точку
        if(!$this.next().next().length) {
            $this.prev().prev().prev()
                .addClass('before');
        }
    });

    dots.eq(0).click();//кликаем на первую точку
});