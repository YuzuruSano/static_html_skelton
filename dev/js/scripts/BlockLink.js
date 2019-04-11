export default class BlockLink {
  exec(target, blank = false) {
    $(target).on("click", function() {
      let href = $(this)
        .find("a")
        .first()
        .attr("href");
      if (!href) {
        href = $(this)
          .find("a")
          .attr("href");
      }

      if (href) {
        if (blank === true) {
          window.open(href);
          return false;
        } else {
          window.location = href;
          return false;
        }
      }
    });
  }
}
