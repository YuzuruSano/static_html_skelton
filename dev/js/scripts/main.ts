import BrowserDetect from "./modules/BrowserDetect";
import SmoothScroll from "./modules/SmoothScroll";
import SpNavi from "./modules/SpNavi";
import ToggleToTop from "./modules/ToggleToTop";
import SetLinkClasses from "./modules/SetLinkClasses";

/**
 * ブラウザ判定用のクラスを設定する
 */
new BrowserDetect();

/**
 * 外部リンクに自動_blank付与
 */
const slc = new SetLinkClasses();
slc.set_external();

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
//通常版
let param = {
  target: "#spnavi",
  trigger: ".btn_sp_navi",
  filter: "resposive_flg",
  speed: 200
};
const spnavi: SpNavi = new SpNavi(param);
spnavi.exec();
/* ===============================================
Smooth Scroll
=============================================== */
const sms: SmoothScroll = new SmoothScroll(spnavi);
sms.exec();



if (module.hot) {
  module.hot.accept();
}
