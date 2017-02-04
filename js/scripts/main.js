import Responsive from './Responsive';
import SmoothScroll from './SmoothScroll';
import Accordion from './Accordion';
import Tab from './Tab';
import SpNavi from './SpNavi';
import ToTop from './ToTop';

/* ===============================================
Check responsive state
=============================================== */
// const r = new Responsive();

// $(window).on('resize',function(){
// 	console.log(r.state()());
// });
/* ===============================================
SP Navi
=============================================== */
let param = {
	target:'#spnavi',
	trigger:'.btn_sp_navi',
	filter:'resposive_flg',
	speed:200
};
const spnavi = new SpNavi(param);
spnavi.exec();
/* ===============================================
Smooth Scroll
=============================================== */
const sms = new SmoothScroll();
sms.exec();
/* ===============================================
To Top
show/hide toggle
=============================================== */
const totop = new ToTop('#totop',100,400);
totop.exec();
/* ===============================================
Accordion

markp:
<dl>
	<dt></dt>
	<dd></dd>
	<dt></dt>
	<dd></dd>
	<dt></dt>
	<dd></dd>
</dl>
=============================================== */
// const ac = new Accordion($('dt'));
// ac.exec();
/* ===============================================
Tab

markup:
<div class="tc">
	<ul>
		<li>tab1</li>
		<li>tab2</li>
		<li>tab3</li>
	</ul>
	<div class="tc_content">
		tabcon1tabcon1tabcon1tabcon1tabcon1tabcon1
	</div>
	<div class="tc_content">
		tabcon2tabcon2tabcon2tabcon2tabcon2tabcon2
	</div>
	<div class="tc_content">
		tabcon3tabcon3tabcon3tabcon3tabcon3tabcon3
	</div>
</div>
=============================================== */
// const tab = new Tab('.tc li','.tc .tc_content');
// tab.exec();
