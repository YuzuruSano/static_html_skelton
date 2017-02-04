/* ===============================================
legacy
=============================================== */
/* ===============================================
const
=============================================== */
if (typeof BaseScript === "undefined"){
	var BaseScript= {};
}
//global $(window);
BaseScript.wobj = function($){
	return $(window);
};
BaseScript.w = BaseScript.wobj(jQuery);
//global is_responsive
BaseScript.is_responsive;
(function($) {
$(function(){
	var is_responsive_nome = function(){
		if($('#responsive_flg').css('display') == 'block'){
			return true;
		}
		return false;
	};
	//ブラウザの負荷を下げる
	BaseScript.is_responsive = _.throttle(is_responsive_nome, 500);
});
})(jQuery);
/* ===============================================
sp navi
=============================================== */
(function($) {
$(function(){
	var controller = new slidebars();
	controller.init();
	//drower menu events
	$( '.js-toggle-spnav-right' ).on( 'click', function ( event ) {
		event.preventDefault();
		event.stopPropagation();
		$('body').addClass('canvas_ok');
		controller.toggle( 'spnav-right' );
	} );
	$( document ).on( 'click touchstart', '.js-close-any,.btn--close', function ( event ) {
		if ( controller.getActiveSlidebar() ) {
			event.preventDefault();
			event.stopPropagation();
			controller.close();
			$('body').removeClass('canvas_ok');
			return false;
		}
	} );
	$( controller.events).on( 'opening', function ( event ) {
		$( '[canvas]' ).addClass( 'js-close-any' );
		$( '[canvas]' ).on("touchmove._noscroll" , function(event) {
			event.preventDefault();
		});
	} ).on( 'closed', function(){
		$('body').removeClass('canvas_ok');
		$( '[canvas]' ).removeClass( 'js-close-any' );
		$( '[canvas]' ).off("touchmove._noscroll");
	});
	//resize fix
	BaseScript.w.on('resize',function(){
		if(!BaseScript.is_responsive()){
			controller.close();
		}
	});
});
})(jQuery);
/* ===============================================
smooth scroll
=============================================== */
(function($){
$(function(){
	$('a[href^="#"]').click(function(ev) {
		ev.preventDefault();
		var speed = 800; //移動スピード
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});
})(jQuery);
/* ===============================================
imagedLoaded
画像を完全に読み込んだ後に処理を開始

【サンプル】
body内の画像が全て読み込まれてからフェードインしてbodyを表示、
かつinview.jsでブラウザ上で画像が見えた段階で表示

■html
<body>
	<div id="wrap"></div>
</body>

■css
body {
	visibility:hidden;
	opacity:0;
}
#wrap img {
	opacity:0;
}
=============================================== */
//(function($) {
//$(function(){
//	$('body').imagesLoaded(function(){
//		setTimeout(function(){
//			$('body').css({'visibility':'visible'}).animate({'opacity':100},300);
//			//inview.js
//			$('#wrap img').on('inview',function(event, isInView, visiblePartX, visiblePartY){
//				$(this).animate({'opacity':100},5000);
//			});
//		},800);
//	});
//});
//})(jQuery);
/* ===============================================
簡易画像置換
#responsive_flgでレスポンシブレイアウトか否かを判定し、画像を差し替える

imgのdata-spsrc属性に差し替える画像を指定
imgのdata-spsrc属性に差し替える画像のwidthを指定
=============================================== */
//(function($) {
//$(function(){
//	var spsrc;
//	var src;
//	var base_src;

//	$('img').each(function(){
//		base_src = $(this).attr('src');
//		$(this).data('basesrc',base_src);
//	});

//	$(window).on('load resize',function(){
//		if($('#responsive_flg').css('display') == 'block'){
//			$('img').each(function(){
//				spsrc = $(this).data('spsrc');
//				spwidth = $(this).data('spwidth');
//				src = $(this).attr('src');
//				if(spsrc != void 0){
//					$(this).attr('src',spsrc);
//				}

//				if(spwidth != void 0){
//					$(this).width(spwidth).height('auto');
//				}
//			});
//		}else{
//			$('img').each(function(){
//				spsrc = $(this).data('spsrc');
//				src = $(this).data('basesrc');

//				if(spsrc != void 0){
//					$(this).attr('src',src);
//				}

//				$(this).width('').height('');
//			});
//		}
//	});

//});
//})(jQuery);

/* ===============================================
accordion
クリックした次の要素を開いて、クリックした要素にactiveクラスを付与
開きたい要素にはcssで予めdisplay:noneを付与しておくこと
=============================================== */
// (function($) {
// 	 $(function(){
// 		//旧バージョン
// 		$("dt").on("click", function() {
// 			$(this).next().slideToggle();
// 			$(this).toggleClass("active");
// 		});
// 		//新バージョン
// 		$("dt").toggle(function(){
// 			$(this).next().slideDown('100');
// 			$(this).addClass('active');
// 		},function(){
// 			$(this).next().slideUp('100');
// 			$(this).removeClass('active');
// 		});
// 	});
// })(jQuery);

/* ===============================================
tab
クリックイベントをバインドする要素と開くタブを.eq()で紐付けて開く
=============================================== */
//(function($) {
//$(function(){
//	$('クリックイベントをバインドする要素').click(function() {
//		var index = $('クリックイベントをバインドする要素').index(this);

//		$(タブ).css('display','none');
//		$(タブ).eq(index).css('display','block');

//		$(タブ).removeClass('active');
//		$(this).addClass('active');

//		return false;
//	});
//});
//})(jQuery);

/* ===============================================
Lodashのサンプルコード
詳しい使い方は下記
http://qiita.com/takeharu/items/7d4ead780710c627172e
=============================================== */
//(function($) {
//$(function(){
//	var data = 'json';//jsonや配列を代入する

//	//each（foreach）
//	_.each(data, function(item) {
//		console.log(item);//処理
//	});
//	//filter
//	filterd_data = _.filter(data, function(item){
//		return _.contains(item.category, '検索対象としたいカテゴリー');
//	});
//	//filterしたデータをテンプレートで出力
//	//テンプレート
//	var compiled = _.template(
//		 '<% _.each(items, function(item,index) { %>'
//			+'<li class="link_wrap">'
//				+'<img src="<%= item.src_s %>" alt="">'
//				+'<div class="meta">'
//					+'<div class="tag_wrap clearfix">'
//						+'<%= item.tag_html %>'
//					+'</div>'
//					+'<a href="<%= item.href %>"<%= item.target %>><%= item.new %><%= item.title %></a>'
//				+'</div>'
//			+'</li>'
//		+ '<% }); %>'
//	);

//	//テンプレート適用
//	tab_wrap.html(compiled(filtered_obj));
//});
//})(jQuery);
