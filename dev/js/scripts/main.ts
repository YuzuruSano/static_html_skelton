import BrowserDetect from "./modules/BrowserDetect";
import MatchMedia from "./modules/MatchMedia";
import SetLinkClasses from "./modules/SetLinkClasses";
import SmoothScroll from "./modules/SmoothScroll";
import SpNavi from "./modules/SpNavi";
import ToggleToTop from "./modules/ToggleToTop";
/**
 * ブラウザ判定用のクラスを設定する
 */
new BrowserDetect();

/**
 * 外部リンクに自動_blank付与
 */
new SetLinkClasses();
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
const mm = new MatchMedia();
// console.log(mm.is('sm'));
// console.log(mm.is('md'));
// console.log(mm.is('lg'));
// console.log(mm.is('xl'));

/**
 * totopボタンをフッター直前で止める
 */
new ToggleToTop();

/**
 * spナビ
 */
new SpNavi();
/**
 * スムーススクロール
 */
new SmoothScroll();

// Note: Outdated usage, is not required more.
// if (module.hot) {
// 	module.hot.accept();
// }
console.log('>> main.ts');