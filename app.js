var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".mySwiper2", {
      direction: "vertical",
      spaceBetween: 50,
      slidesPerView: 1,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});


var swiper3 = new Swiper(".mySwiper3", {
      direction: "vertical",
      spaceBetween: 50,
      slidesPerView: 1,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

var swiper4 = new Swiper(".mySwiper4", {
      direction: "vertical",
      spaceBetween: 50,
      slidesPerView: 1,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});


$(() => {
    // console.log('it has started')
    swiper2.on('slideChange', function () {
        let textiAnimuar = $('.textiPrez');
        $(textiAnimuar)
        .delay(400)
        .animate({fontSize: '6rem'})
        .addClass('animate__animated animate__zoomInLeft')
        .css({'--animate-duration': '3s'});

        $('.imgThought').delay(4000).animate({
            opacity: 1            
        }, "slow")

        $('.imazhiPare').delay(3000).animate({opacity: 1 }, "slow");    
    });

    let count = 0;

    swiper.on('slideChange', function () {
      count++;

      console.log(count);


      if (count === 2) {
        $('.animateMiddleAges').show();
        $('.imazhilevizes').show();
        $('.animateMiddleAges')
        .delay(2000)
        .animate({opacity: 1}, 'slow');

        $('.imazhilevizes').delay(2000).animate({
          top: 130,
          left: 200
        }, '6000').delay(2000).animate({
          top: 570,
          left: 350,
        }, '6000').delay(3000).animate({
          top: 650,
          left: 640
        }, '6000')
      } else if(count > 2 || count < 2) {
        $('.animateMiddleAges').hide();
        $('.imazhilevizes').hide();
      }

    });


})