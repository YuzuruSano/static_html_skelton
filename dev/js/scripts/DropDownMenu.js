export default class DropDownMenu {
  constructor(target, child, dur) {
    this.target = target;
    this.child = child;
    this.dur = dur;
  }

  exec() {
    let child_name = this.child;
    _.each($(this.target), function(item) {
      let parent = $(item);
      let child = parent.find(child_name);
      if (child.length > 0) {
        parent
          .on("mouseenter", function() {
            child.slideDown(this.dur);
          })
          .on("mouseleave", function() {
            child.slideUp(this.dur);
          });
      }
    });
  }
}
