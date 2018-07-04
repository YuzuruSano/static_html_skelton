import Responsive from './Responsive';
import IScroll from 'iscroll';

class SpNavi{
	constructor(param) {
		this.touches = typeof document.ontouchstart != "undefined",
		this.target = param.target;
		this.trigger = param.trigger;
		this.filter = param.filter;
		this.speed = param.speed;
		this.scroll;
		this.fixer = param.fixer;
	}

	scrollOff( e ){
		e.preventDefault();
	}

	exec(...callbacks){
		const [target,_touches] = [this.target , this.touches];
		const cb = callbacks;
		let _that = this;
		let th = 0;
		let scroller;
		//set height
		if (this.touches) {
			th = window.innerHeight;
		}else{
			th = $(window).height();
		}

		$(target).find('#scroller > .inner').css({'padding-bottom':this.fixer});//padding-bottomhは環境に合わせて調整

		$('#spnavi_close').on('click',function(){
			$(this.trigger).click();
		}.bind(this));

		//set click event
		$(this.trigger).on('click',function(ev){
			let status = $(target).css('display');

			if(status == 'block'){
				$(target).fadeOut(this.speed);
				$('#spnavi_close').fadeOut(this.speed);
				$(this.filter).fadeOut(this.speed);
				document.removeEventListener( 'touchmove', _that.scrollOff, {passive: false} );
				$(this).removeClass('active');
				$('body').css({'position':'relative'});
			}else{
				$(target).fadeIn(this.speed);
				$(this.filter).fadeIn(this.speed);
				$('#spnavi_close').fadeIn(this.speed);
				scroller = new IScroll(target, {
					scrollX: false,
					preventDefault: false,
					mouseWheel: false,
					disablePointer: true,
					disableTouch: false,
					disableMouse: false
				});
				document.addEventListener( 'touchmove',_that.scrollOff, {passive: false});
				$(this).addClass('active');
				$('body').css({'position':'fixed'});

				if(cb.length > 0){
					for (let i=0;i<cb.length;i++) {
						cb[i](scroller);
					}
				}

			}
			ev.preventDefault();
		});

		const r = new Responsive();

		// $(window).on('load resize',function(){
		// 	if(!r.isPC()){
		// 		$(target).hide();
		// 	}
		// });
	}
}
module.exports = SpNavi;
