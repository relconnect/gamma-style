$(document).ready(function() {
  $("#responsiveTabs").responsiveTabs({
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

  $(".r-tabs-tab").click(function() {
    $(".bx-slider").slick("setPosition");
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
    if (
      !$(e.target).closest($(".dropdown")).length &&
      $(".dropdown").hasClass("open")
    ) {
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
});
