$(document).ready(function() {
  $("#responsiveTabs").responsiveTabs({
    startCollapsed: "accordion"
  });
  $("#productTab").responsiveTabs({
    startCollapsed: "accordion"
  });
  $("#prodct-sale-tab").responsiveTabs({
    startCollapsed: "accordion"
  });
  // Плавное появление текста на главной
  $(function() {
    var nav = $(".text-content__wrap"),
      animateTime = 500,
      navLink = $(".text-content__more-btn");
    navLink.click(function() {
      if (nav.height() === 170) {
        autoHeightAnimate(nav, animateTime);
        nav.removeClass("hide-text");
        $(".text-content__more-btn").toggleClass("open");
      } else {
        nav.stop().animate({ height: "170" }, animateTime);
        nav.addClass("hide-text");
        $(".text-content__more-btn").toggleClass("open");
      }
    });

    /* Function to animate height: auto */
    function autoHeightAnimate(element, time) {
      var curHeight = element.height(); // Get Default Height
      console.log(curHeight);
      autoHeight = element.css("height", "auto").height(); // Get Auto Height
      console.log(autoHeight);
      element.height(curHeight); // Reset to Default Height
      element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
    }
  });

  $(".bx-category-slider").slick({
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 6000,
          verticalSwiping: true
        }
      },
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 6000,
          verticalSwiping: true
        }
      }

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(".bx-slider-index").slick({
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 6000,
          verticalSwiping: true
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 6000,
          verticalSwiping: true
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,

          autoplay: false,
          autoplaySpeed: 6000,
          verticalSwiping: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          vertical: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: false,
          autoplaySpeed: 6000,
          verticalSwiping: true
        }
      }
    ]
  });

  $("#recommendation-slider").slick({
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 6000,
          verticalSwiping: true
        }
      },

      {
        breakpoint: 1027,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 6000,
          verticalSwiping: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 6000,
          verticalSwiping: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(".bs-slider").slick({
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 6000,
          verticalSwiping: true
        }
      },
      {
        breakpoint: 1027,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 6000,
          verticalSwiping: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 6000,
          verticalSwiping: true
        }
      }

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // $("#product-action-slider").slick({
  //   adaptiveHeight: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 6000,
  //   verticalSwiping: true
  // });

  $(".r-tabs-tab").click(function() {
    $(".bx-slider").slick("setPosition");
  });

  $(".r-tabs-tab").click(function() {
    $(".bs-slider").slick("setPosition");
  });

  $(".stock-compare__link").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });

  //Открыть/закрыть выпадалку с телефонами
  $(function() {
    $(".arrow").click(function() {
      $(this)
        .closest(".dropdown")
        .toggleClass("open");
    });
  });

  //Скрываем блок с телефонами  при клике за пределами блока
  $(document).on("click", function(e) {
    if (!$(e.target).closest($(".dropdown")).length && $(".dropdown").hasClass("open")) {
      $(".dropdown").removeClass("open");
    }
    e.stopPropagation();
  });

  $(".form__input").focus(function() {
    $(this)
      .siblings(".form__label")
      .addClass("visible");
  });
  $(".form__message").focus(function() {
    $(this)
      .siblings(".form__label")
      .addClass("visible");
  });

  $(".form__input").blur(function() {
    $(this)
      .siblings(".form__label")
      .removeClass("visible");
  });
  $(".form__message").blur(function() {
    $(this)
      .siblings(".form__label")
      .removeClass("visible");
  });

  //Меняем цвет активной кнопки для изменения отображения товаров в каталоге

  $(function() {
    $(".mode__link").click(function(e) {
      e.preventDefault();

      $(".mode__link").each(function(index, elem) {
        $(elem).removeClass("active");
      });
      $(e.target).addClass("active");
    });
  });

  // Show/hide  параметры фильтра в каталоге
  $(function() {
    $(".filter_block-name .filter_img").click(function(e) {
      let img = $(this);
      let parent = img.closest(".filter_block");
      img.toggleClass("show");
      if (!img.hasClass("show")) {
        parent.find(".js-show").hide(100);
      } else {
        parent.find(".js-show").show(100);
      }
    });
  });

  $(function() {
    $(".footer__cross-img").click(function(e) {
      var target = e.target;
      var parent = $(this).parent();
      $(this).toggleClass("show");
      if ($(this).hasClass("show")) {
        parent.find(".footer__col-list").show(200);
      } else {
        parent.find(".footer__col-list").hide(200);
      }
    });
  });

  //Показать/скрыть дополнительное меню вторго уровня в каталоге
  $(function() {
    $(".sub-menu__item").hover(function(e) {
      console.log(1);
      let item = $(this);
      let link = item.find(".sub-menu__link");
      link.toggleClass("show");
      if ($(link).hasClass("show")) {
        $(link)
          .next(".sub-menu__list-second")
          .show();
      } else {
        link.next(".sub-menu__list-second").hide();
      }
    });
  });

  $(function() {
    $(".popup-menu-link").click(function(e) {
      e.preventDefault();
      $(this).toggleClass("isShown");

      if ($(this).hasClass("isShown")) {
        $(".catalog__filter").show();
      } else {
        $(".catalog__filter").hide();
      }
    });
  });
});
//Настройка range слайдера
$(document).ready(function() {
  // Плавное появление списка фильтров в каталоге
  $(function() {
    var nav = $(".more-filter__btn").prev(),
      animateTime = 500,
      navLink = $(".more-filter__btn");
    navLink.click(function(e) {
      if (nav.height() === 164) {
        autoHeightAnimate(nav, animateTime);
        nav.removeClass("hide");
        $(".more-filter__btn").toggleClass("open");
      } else {
        nav.stop().animate({ height: "164" }, animateTime);
        nav.addClass("hide");
        $(".more-filter__btn").toggleClass("open");
      }
    });

    /* Function to animate height: auto */
    function autoHeightAnimate(element, time) {
      var curHeight = element.height(); // Get Default Height
      console.log(curHeight);
      autoHeight = element.css("height", "auto").height(); // Get Auto Height
      console.log(autoHeight);
      element.height(curHeight); // Reset to Default Height
      element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
    }
  });
});

//Скрываем дополнительное меню при клике за пределами блока
$(document).on("click", function(e) {
  if (!$(e.target).closest($(".popup-menu-link")).length && $(".popup-menu-link").hasClass("isShown")) {
    $(".popup-menu-link").removeClass("isShown");
    $(".pop-up__submenu").hide();
  }
  e.stopPropagation();
});

$(function() {
  $(".cat__block").hover(
    function(e) {
      let item = $(this);
      item.addClass("hovered");
      let link = item.find(".promo");
      link.toggleClass("show");
      if ($(link).hasClass("show")) {
        $(link)
          .find(".pop-menu__list")
          .show();
      } else {
        link.find(".pop-menu__list").hide();
      }
    },
    function() {
      let item = $(this);
      item.addClass("hovered");
      let link = item.find(".promo");
      link.toggleClass("show");

      item.removeClass("hovered");
      link.find(".pop-menu__list").hide();
    }
  );

  $(".vertica__slider").slick({
    vertical: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    verticalSwiping: true,
    // centerPadding: "10px",
    // centerMode: true
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false
        }
      }
    ]
  });

  $(".horizontal_slider").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,

    // centerPadding: "10px",
    // centerMode: true
    responsive: [
      {
        breakpoint: 767,
        settings: {}
      }
    ]
  });
});

if ($(".rating__customer").length) {
  $(function() {
    $(".rating__customer").each(function() {
      $(this).barrating({
        theme: "css-stars",
        readonly: true
      });
    });
  });
}

if ($(".rating__customer").length) {
  $(function() {
    $("#from-rating__customer").barrating({
      theme: "css-stars"
    });
  });
}

$(function() {
  $(".show__review-btn").click(function() {
    $(".review_clip").show(300);
    $(this).hide(200);
  });
});

$(function() {
  $(".plus, .minus").click(function(evt) {
    let input = $(this)
      .closest(".product__quantity")
      .find("input")
      .val();
    if (input > 0) {
      $(this).hasClass("minus")
        ? $(this)
            .closest(".product__quantity")
            .find("input")
            .val(input * 1 - 1)
        : $(this)
            .closest(".product__quantity")
            .find("input")
            .val(input * 1 + 1);
    } else if (input == 0) {
      $(this).hasClass("minus")
        ? false
        : $(this)
            .closest(".product__quantity")
            .find("input")
            .val(input * 1 + 1);
    } else {
      return;
    }
  });

  $("#range-slider").slider({
    min: 0,
    max: 5000,
    step: 1,
    range: true,
    values: [0, 5000],
    slide: function(event, ui) {
      for (var i = 0; i < ui.values.length; ++i) {
        $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
      }
    }
  });

  $("input.sliderValue").change(function() {
    var $this = $(this);
    $("#range-slider").slider("values", $this.data("index"), $this.val());
  });
});
