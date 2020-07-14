import Entry from "entry";
import BrowserDetect from "modules/BrowserDetect";
import SmoothScroll from "modules/SmoothScroll";
import SpNavi from "modules/SpNavi";
import ToTop from "modules/ToTop";
import link_icon from "modules/link_icon";

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
const spnavi = new SpNavi(param);
spnavi.exec();
/* ===============================================
Smooth Scroll
=============================================== */
const sms = new SmoothScroll(spnavi);
sms.exec();
/* ===============================================
To Top
show/hide toggle
=============================================== */
const totop_param = {
  target: "#totop",
  stop_at: "#global_footer",
  fixer: 100,
  speed: 400,
  stop: true
};
const totop = new ToTop(totop_param);
totop.exec();

if (module.hot) {
  module.hot.accept();
}
