$(document).ready(function () {
  $(".security-accordion__header").click(function () {
    let item = $(this).parent();

    if (item.hasClass("active")) {
      item.removeClass("active");
      item.find(".security-accordion__content").slideUp();
    } else {
      $(".security-accordion__item").removeClass("active");
      $(".security-accordion__content").slideUp();
      item.addClass("active");
      item.find(".security-accordion__content").slideDown();
    }
  });
});
