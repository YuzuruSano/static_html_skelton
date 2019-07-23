export default class Accordion {
  constructor(target) {
    this.target = target;
  }

  exec() {
    $(this.target).on("click", function(e) {
      e.preventDefault();
      let next = $(this).next();
      let state = next.css("display");
      if (state == "block") {
        $(this).removeClass("active");
        next.slideUp(200);
      } else {
        $(this).addClass("active");
        next.slideDown(200);
      }
    });
  }
}
