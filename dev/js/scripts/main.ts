import BrowserDetect from "./modules/BrowserDetect";
import SmoothScroll from "./modules/SmoothScroll";
import SpNavi from "./modules/SpNavi";
import ToggleToTop from "./modules/ToggleToTop";
import SetLinkClasses from "./modules/SetLinkClasses";

/**
 * 
 */
new BrowserDetect();
const slc = new SetLinkClasses();
slc.set_external();
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
/* ===============================================
To Top
show/hide toggle
=============================================== */
const totop_param: Object = {
  target: "#totop",
  stop_at: "#global_footer",
  fixer: 100,
  speed: 400,
  stop: true
};
const toggleToTop: ToggleToTop = new ToggleToTop(totop_param);
toggleToTop.bindEvent();

if (module.hot) {
  module.hot.accept();
}
