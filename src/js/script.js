$(function() {
  $('.banner-section__slider').slick({
    dots: true,
    dotsClass: 'banner-section__dots',
    prevArrow: '<button class="banner-section__slider-button banner-section__slider-button--prev button" type="button"><img src="./images/svg/arrow-prew.svg" alt="Стрелка переключения влево"></button>',
    nextArrow: '<button class="banner-section__slider-button banner-section__slider-button--next button" type="button"><img src="./images/svg/arrow-next.svg" alt="Стрелка переключения вправо"></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          arrows: false
        }
      }
    ]
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
    nextArrow: '<button class="products__slider-button products__slider-button--next button" type="button"><img src="./images/svg/arrow-next-black.svg" alt="Стрелка переключения вправо"></button>',
    responsive: [
      {
        breakpoint: 1371,
        settings: {
          arrows: false,
          variableWidth: false,
          dots: true,
          dotsClass: 'products__dots'
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
          arrows: false,
          dots: true,
          dotsClass: 'products__dots'
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
          arrows: false,
          dots: true,
          dotsClass: 'products__dots'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          arrows: false,
          dots: true,
          dotsClass: 'products__dots'
        }
      }
    ]
  });

  $('.aside-filter__title-drop, .filter-button__extra').on('click', function() {
    $(this).toggleClass('aside-filter__title-drop--active');
    $(this).next().slideToggle();
  });

  $('.js-range-slider').ionRangeSlider();

  $('.catalog__button--column').on('click', function() {
    $(this).addClass('catalog__button--active');
    $('.catalog__button--line').removeClass('catalog__button--active');
    $('.catalog__product').removeClass('catalog__product--list');
  });

  $('.catalog__button--line').on('click', function() {
    $(this).addClass('catalog__button--active');
    $('.catalog__button--column').removeClass('catalog__button--active');
    $('.catalog__product').addClass('catalog__product--list');
  });

  $(function () {
    $('.rate-yo').rateYo({
      starWidth: "23px",
      normalFill: "#C4C4C4",
      ratedFill: "#1C62CD"
    });
  });

  $('.header__burger').on('click', function() {
    $('.header__burger').toggleClass('header__burger--opened');
    $('.header__menu-mobile').toggleClass('header__menu-mobile--opened');
  });

  $('.page-footer__title').on('click', function() {
    $(this).next().slideToggle();
    $(this).toggleClass('page-footer__title--active')
  });

  $('.catalog__button-filter').on('click', function() {
    $(this).next().slideToggle();
  });

});

