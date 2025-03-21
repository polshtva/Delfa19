$(document).ready(function () {
  //Откртытие карточек
  $(".security-accordion__header").click(function () {
    let item = $(this).parent();

    if (item.hasClass("active")) {
      item.removeClass("active");
      item.find(".security-accordion__content").slideUp();
      item.css("background", "#ffff"); // Цвет фона для закрытого элемента
    } else {
      // Убираем активный класс и закрываем все элементы
      $(".security-accordion__item").removeClass("active");
      $(".security-accordion__content").slideUp();
      $(".security-accordion__item").css("background", "#ffff"); // Цвет фона для закрытых элементов

      // Открываем текущий элемент и устанавливаем активный класс
      item.addClass("active");
      item.find(".security-accordion__content").slideDown();
      item.css("background", "#F0F1F5"); // Цвет фона для активного элемента
    }
  });

  let swiperServices;

  function initSwiper() {
    let screenWidth = $(window).width();

    if (swiperServices) swiperServices.destroy(true, true); // Уничтожаем старый Swiper

    swiperServices = new Swiper(".services .swiper", {
      slidesPerView: screenWidth <= 500 ? 1 : "auto", // 1 слайд если <=500px, иначе auto
      spaceBetween: 22, // Убираем отступы
      loop: true, // Бесконечный слайдер
      pagination: {
        el: ".services .swiper-pagination",
        clickable: true,
        bulletClass: "dot",
        bulletActiveClass: "active",
      },
      navigation: {
        nextEl: ".services .slider__next",
        prevEl: ".services .slider__prev",
      },
    });
  }

  initSwiper(); // Запускаем при загрузке страницы

  // Отслеживаем изменение размера окна и пересоздаём Swiper
  $(window).on("resize", function () {
    initSwiper();
  });
  // Получаем все точки пагинации
  const $dots = $(".dots .dot");

  // Функция для обновления активной точки
  function updateActiveDot(index) {
    $dots.removeClass("active").eq(index).addClass("active");
  }

  // Обработчик для кнопки "вперед"
  $(".services .slider__next").on("click", function () {
    const activeIndex = $dots.index($(".dots .dot.active"));
    const nextIndex = (activeIndex + 1) % $dots.length; // Циклический переход
    updateActiveDot(nextIndex);
  });

  // Обработчик для кнопки "назад"
  $(".services .slider__prev").on("click", function () {
    const activeIndex = $dots.index($(".dots .dot.active"));
    const prevIndex = (activeIndex - 1 + $dots.length) % $dots.length; // Циклический переход
    updateActiveDot(prevIndex);
  });
});
