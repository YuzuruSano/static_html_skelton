import Responsive from './Responsive';
import SmoothScroll from './SmoothScroll';
import Accordion from './Accordion';
import Tab from './Tab';
import SpNavi from './SpNavi';
import ToTop from './ToTop';
import DropDownMenu from './DropDownMenu';
import BlockLink from './BlockLink';
import Gmap from './Gmap';

/* ===============================================
Check responsive state
=============================================== */
// const r = new Responsive();

// $(window).on('resize',function(){
// check is responsive;
// 	console.log(r.state()());
// });
// check is mobile;
// alert(r.isPhone());
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
box link
=============================================== */
// let box_link = new BlockLink();
// box_link.exec('.box_link');
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
DropDown

markp:
<ul>
	<li>
		<a href=""></a>
		<ul class="child">
			<li>
				<a href=""></a>
			</li>
			<li>
				<a href=""></a>
			</li>
			<li>
				<a href=""></a>
			</li>
		</ul>
	</li>
	<li>
		<a href=""></a>
	</li>
	<li>
		<a href=""></a>
	</li>
</ul>
=============================================== */
// const dd = new DropDownMenu('ul li','.child',200);
// dd.exec();
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

// /* gmap
// ----------------------- */
// let gmap = new Gmap();
// $(window).on('load',function(){
// 	gmap.exec();
// });
