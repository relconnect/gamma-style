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

  $(".bx-slider").slick({
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    verticalSwiping: true
  });
  $("#recommendation-slider").slick({
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    verticalSwiping: true
  });

  $(".bs-slider").slick({
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    verticalSwiping: true
  });

  $("#product-action-slider").slick({
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    verticalSwiping: true
  });

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
        $(".pop-up__submenu").show();
      } else {
        $(".pop-up__submenu").hide();
      }
    });
  });
});
//Настройка range слайдера
$(document).ready(function() {
  $("#slider").slider({
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
    $("#slider").slider("values", $this.data("index"), $this.val());
  });

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
    verticalSwiping: true
    // centerPadding: "10px",
    // centerMode: true
  });
});
