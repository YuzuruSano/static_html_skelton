import Responsive from './Responsive';
import SmoothScroll from './SmoothScroll';
import Accordion from './Accordion';
import Tab from './Tab';
import SpNavi from './SpNavi';
import ToTop from './ToTop';
import DropDownMenu from './DropDownMenu';
import BlockLink from './BlockLink';
import Gmap from './Gmap';
import bowser from 'bowser';
import matchheight from 'jquery-match-height';

if(bowser.msie === true) {
	$('body').addClass('ie');
}else if(bowser.msedge === true){
	$('body').addClass('edge');
}else if(bowser.firefox === true){
	$('body').addClass('ff');
}else if(bowser.tablet === true){
	$('body').addClass('tablet');
}
if(bowser.mobile === true){
	$('body').addClass('device--mobile');
	if(bowser.android === true) {
		$('body').addClass('device--mobile--android');
	}
}

let os, ua = navigator.userAgent;
if (ua.match(/Win(dows )?NT 10\.0/)) {
	os = "win10";
}
else if (ua.match(/Win(dows )?NT 6\.3/)) {
	os = "win8_1";
}
else if (ua.match(/Win(dows )?NT 6\.2/)) {
	os = "win8";
}
else if (ua.match(/Win(dows )?NT 6\.1/)) {
	os = "win7";
}else{
	os = '';
}

$('body').addClass(os);
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
//通常盤
let param = {
	target:'#spnavi',
	trigger:'.btn_sp_navi',
	filter:'resposive_flg',
	speed:200
};
const spnavi = new SpNavi(param);
spnavi.exec();

//execに可変引数で処理を渡してナビの開閉時に処理させるサンプル
//例として、SPナビでアコーディオンを開くたびにiScrollをリセットする
// let spnav_accordion_1 = (scroller)=>{
// 	$('#scroller .inner > ul > li > span').off();
// 	$('#scroller .inner > ul > li > span').on('click',function(){
// 		let $parent = $(this).parent('li');
// 		let $child = $(this).next('.gnavi-child');
// 		let status = $child.css('display');

// 		if(status == 'block'){
// 			$child.slideUp(300,function(){
// 				scroller.refresh();
// 			});
// 			$parent.removeClass('active');
// 		}else{
// 			$child.slideDown(300,function(){
// 				scroller.refresh();
// 			});
// 			$parent.addClass('active');
// 		}

// 		return false;
// 	});
// }
// spnavi.exec(spnav_accordion_1);
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

/**
 * 外部リンク・PDF・Word・Exlsに_blankの自動付与
 *
 */
const link_icon = require('./link_icon');
link_icon();
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

/* ===============================================
instagram with infinityScroll

markup:
<div class="slide--instagram_wrapper" id="insragram">
	<div class="slide--instagram">
		<div id="js-slide--instagram">
			<ul class="inner"></ul>
		</div>
	</div>
</div>
=============================================== */
/**
 *
 * @param {sring} requet_url instagramのリクエストURL ./_instagram_template.htmlにhtmlテンプレートサンプルあり
 * @param {element} append_target 読み込んだ写真を追加する要素
 * @param {element} slide_target スライドショーさせる要素
 */
// const instagram = require('./instagram');
// instagram('request_url','#js-slide--instagram .inner','#js-slide--instagram');
