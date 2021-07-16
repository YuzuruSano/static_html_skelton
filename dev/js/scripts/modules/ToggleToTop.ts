import Util from "./Util";
import { throttle } from 'throttle-debounce';

export default class ToggleToTop {
  private target:HTMLElement | null;
  private stop_at:HTMLElement | null;
  private fixer: Number;
  private speed: Number;
  private stop: Boolean;
  private util: Util;
  
  constructor({
    target = "#totop",
    stop_at = "#footer",
    fixer = 100,
    speed = 200,
    stop = true
  }) {
    this.target = document.querySelector(target);
    this.stop_at = document.querySelector(stop_at);
    this.fixer = fixer;
    this.speed = speed;
    this.stop = stop;
    this.util = new Util();

    this.bindEvent();
  }

  bindEvent(): void {
    window.addEventListener("load", () => {
      this.toggle();
    })

    window.addEventListener("scroll",
      throttle(200, () => {
        this.toggle();
      })
    );

    window.addEventListener("resize",
      throttle(200, () => {
        this.toggle();
      })
    );
  }

  /**
   * フッター手前でボタンを止める
   * position fixed or relativeを切り替えるだけなのでhtml構造による位置調整や左右位置などはDOM/CSSで別途調整必要
   * @return void
   */
  togglePosition(): void {
    if (!this.target) return;
    
    const scrollHeight: Number = document.body.clientHeight,
          scrollPosition: Number = +window.innerHeight + +this.util.scrollTop(),
          footHeight : Number = this.stop_at ? this.stop_at.clientHeight : 0,
          trigger: Number = +scrollHeight - +scrollPosition;
    
    if (trigger <= footHeight) {
      const bottomPos = +footHeight + 30;
      this.target.style.position = "absolute";
      this.target.style.bottom = `${bottomPos}px`;
    } else {
      this.target.style.position = "fixed";
      this.target.style.bottom = "30px";
    }
  }

  toggle(): void {
    if (this.util.scrollTop() > this.fixer) {
      this.target?.classList.add('_triggerd');
    } else {
      this.target?.classList.remove('_triggerd');
    }

    if (this.stop) {
      this.togglePosition();
    }
  }
}
