$(function() {
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-button banner-section__slider-button--prev button" type="button"><img src="./images/svg/arrow-prew.svg" alt="Стрелка переключения влево"></button>',
    nextArrow: '<button class="banner-section__slider-button banner-section__slider-button--next button" type="button"><img src="./images/svg/arrow-next.svg" alt="Стрелка переключения вправо"></button>'
  });

  $('.tab').on('click', function(e) {
    e.preventDefault();
    $('.tab').removeClass('tab--active');
    $('.tabs__content').removeClass('tabs__content--active');
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs__content--active');
  });
});

