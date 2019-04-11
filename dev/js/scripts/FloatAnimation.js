//Please yarn add gsap
import { TweenMax, TimelineLite } from "gsap";

class FloatAnimation {
  constructor(
    elem,
    direction = "bottom",
    speed = 0.5,
    distance = 20,
    easing = "swing"
  ) {
    this.elem = elem;
    this.speed = speed;
    this.direction = direction;
    this.distance = distance;
    this.before_val = -1 * distance;
    this.after_val = 0;

    this.initial_bottom = this.elem.css(this.direction);
    this.initial_position = this.elem.css("position");

    this.easing = easing;
  }

  animateOneObj() {
    this.setInitialProp();
    TweenMax.fromTo(
      this.elem,
      this.speed,
      {
        [this.direction]: this.before_val,
        position: this.initial_position
      },
      {
        [this.direction]: this.after_val,
        position: this.initial_position,
        autoAlpha: 1,
        delay: 0,
        ease: this.easing,
        onComplete: function() {
          this.setAnimatedClass();
        }.bind(this)
      }
    );
  }

  animateStagger(parent, interval = 0.3) {
    this.setInitialProp();
    TweenMax.staggerFromTo(
      this.elem,
      this.speed,
      {
        [this.direction]: this.before_val,
        position: this.initial_position
      },
      {
        [this.direction]: this.after_val,
        position: this.initial_position,
        autoAlpha: 1,
        delay: 0,
        ease: this.easing,
        onComplete: function() {
          this.setAnimatedClass(parent);
        }.bind(this)
      },
      interval
    );
  }

  setAnimatedClass(elem = this.elem) {
    elem.addClass("animated");
  }

  setInitialProp() {
    if (this.initial_bottom != "auto") {
      this.before_val = parseInt(this.initial_bottom) - this.distance;
      this.after_val = parseInt(this.initial_bottom);
    }
    if (this.initial_position != "absolute") {
      this.initial_position = "relative";
    }
  }
}
module.exports = FloatAnimation;
