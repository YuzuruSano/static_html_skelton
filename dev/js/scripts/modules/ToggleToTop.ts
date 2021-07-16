import { scrollTop } from "Util";

export default class ToggleToTop {
  private target:HTMLElement | null;
  private stop_at:HTMLElement | null;
  private fixer: Number;
  private speed: Number;
  private stop: Boolean;
  
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
  }

  /**
   * フッター手前でボタンを止める
   * position fixed or relativeを切り替えるだけなのでhtml構造による位置調整や左右位置などはDOM/CSSで別途調整必要
   * @return void
   */
  clear_fixed_position() {
    if (!this.target) return;

    const scrollHeight: Number = document.documentElement.clientHeight,
          scrollPosition: Number = window.innerHeight + scrollTop(),
          footHeight : Number = this.stop_at ? this.stop_at.clientHeight : 0,
          trigger: Number = Number(scrollHeight) - Number(scrollPosition);
    
    if (trigger <= footHeight) {
      this.target.style.position = "absolute";
      this.target.style.bottom = `${Number(footHeight) + 30}px`;
    } else {
      this.target.style.position = "fixed";
      this.target.style.bottom = "30px";
    }
  }

  bindEvent(){
    document.addEventListener("load", () => {
      this.toggle();
    })

    document.addEventListener("resize", () => {
      this.toggle();
    })
  }

  toggle() {
    const [target, fixer, speed] = [this.target, this.fixer, this.speed];
    if (scrollTop() > fixer) {
      this.target?.classList.add('._triggerd');
    } else {
      this.target?.classList.remove('._triggerd');
    }

    if (this.stop) {
      this.clear_fixed_position();
    }
  }
}
