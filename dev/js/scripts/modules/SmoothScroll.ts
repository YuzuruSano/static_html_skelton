import ScrollToElement from "scroll-to-element";

export default class SmoothScroll {
  private param: Object;

  constructor(param = {
    offset: 0,
    ease: 'linear',
    duration: 200
  }) {
    this.param = param;
    this.bindEvent();
  }

  bindEvent() : void {
    document.querySelectorAll("a[href^=\\#]").forEach(element => {
      element.addEventListener("click", event => {
        const el = <HTMLLinkElement>event.currentTarget;
        const href = new URL(el.href);
        
        new ScrollToElement(href.hash, this.param)
      })
    });
  }
}
