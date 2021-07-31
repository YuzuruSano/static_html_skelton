import IScroll from "iscroll";
import Util from "./Util";

interface Param {
  target: string;
  trigger: string;
}

export default class SpNavi {
  private target:HTMLElement|null;
  private trigger: HTMLElement|null;
  private current_scrollY: number;
  private callbacks: Array<Function>;

  constructor(param: Param = {
    target: "#spnavi",
    trigger: ".js-open_sp_navi"
  }, ...callbacks:Array<Function>) {
    this.target = document.querySelector<HTMLElement>(param.target);
    this.trigger = document.querySelector<HTMLElement>(param.trigger);
    this.current_scrollY = 0;
    this.scrollOff = this.scrollOff.bind(this);
    this.callbacks = callbacks;
    this.target?.classList.add('_to_fadein');

    this.bindEvent();
  }

  scrollOff(e : Event) {
    e.preventDefault();
  }

  close() {
    this.target?.classList.remove('_triggerd');
    document.body.classList.remove('sp-nav-active');
    
    document.removeEventListener("touchmove", this.scrollOff);
    document.body.style.position = "relative";
    document.body.style.top = "auto";
    window.scrollTo(0, this.current_scrollY)
  }

  open() {
    const util = new Util();
    this.current_scrollY = util.scrollTop();

    document.addEventListener("touchmove", this.scrollOff, { passive: false });

    document.body.style.position = "fixed";
    const top = -1 * +this.current_scrollY
    document.body.style.top = `${top}px`;
    
    this.target?.classList.add('_triggerd');
    document.body.classList.add('sp-nav-active');
    
    const scroller = new IScroll(this.target , {
      scrollX: false,
      preventDefault: false,
      disablePointer: true,
      disableTouch: false,
      mouseWheel: true
    });
    
    if (this.callbacks.length) {
      for (let i = 0; i < this.callbacks.length; i++) {
        this.callbacks[i](scroller);
      }
    }
  }

  bindEvent() {
    this.trigger?.addEventListener("click", event => {
      event.preventDefault();

      if (this.target?.classList.contains('_triggerd')){
        this.close()
      }else{
        this.open();
      }
    });
  }
}
