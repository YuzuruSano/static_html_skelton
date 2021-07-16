import BrowserDetect from "./modules/BrowserDetect";
import SmoothScroll from "./modules/SmoothScroll";
import SpNavi from "./modules/SpNavi";
import ToggleToTop from "./modules/ToggleToTop";
import SetLinkClasses from "./modules/SetLinkClasses";
import MatchMedia from "./modules/MatchMedia";
/**
 * ブラウザ判定用のクラスを設定する
 */
new BrowserDetect();

/**
 * 外部リンクに自動_blank付与
 */
const slc: SetLinkClasses = new SetLinkClasses();
slc.set_external();
/**
 * 画面幅判定
 */
//必要に応じてパラメータをコンストラクタに渡すと、キー指定でメディアクエリにマッチしているかを判定できる
//初期値
// {
//   sm : 640,
//   md : 768,
//   lg : 1024,
//   xl : 1280
// }
const mm: MatchMedia  = new MatchMedia();
console.log(mm.is('sm'));
console.log(mm.is('md'));
console.log(mm.is('lg'));
console.log(mm.is('xl'));

/**
 * totopボタンをフッター直前で止める
 */
const totop_param: Object = {
  target: "#totop",
  stop_at: "#global_footer",//フッターのセレクタ
  fixer: 100,
  speed: 400,
  stop: true
};
new ToggleToTop(totop_param);

/* ===============================================
SP Navi
=============================================== */
//通常版;
new SpNavi();
/* ===============================================
Smooth Scroll
=============================================== */
new SmoothScroll();

if (module.hot) {
  module.hot.accept();
}
