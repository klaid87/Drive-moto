$(function() {
  $('.banner-section__slider').slick({
    dots: true,
    dotsClass: 'banner-section__dots',
    prevArrow: '<button class="banner-section__slider-button banner-section__slider-button--prev button" type="button"><img src="./images/svg/arrow-prew.svg" alt="Стрелка переключения влево"></button>',
    nextArrow: '<button class="banner-section__slider-button banner-section__slider-button--next button" type="button"><img src="./images/svg/arrow-next.svg" alt="Стрелка переключения вправо"></button>'
  });

  $('.tab').on('click', function(e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('.tabs-content')).removeClass('tabs-content--active');
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });

  $('.product-item__favourite').on('click', function() {
    $(this).toggleClass('product-item__favourite--active')
  });

  $('.products__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button class="products__slider-button products__slider-button--prev button" type="button"><img src="./images/svg/arrow-prew-black.svg" alt="Стрелка переключения влево"></button>',
    nextArrow: '<button class="products__slider-button products__slider-button--next button" type="button"><img src="./images/svg/arrow-next-black.svg" alt="Стрелка переключения вправо"></button>'
  });


});

