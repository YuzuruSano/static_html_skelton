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

	exec(...callbacks){
		const [target,_touches] = [this.target , this.touches];
		const cb = callbacks;
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
			ev.preventDefault();

			let status = $(target).css('display');

			if(status == 'block'){
				$(target).fadeOut(this.speed);
				$('#spnavi_close').fadeOut(this.speed);
				$(this.filter).fadeOut(this.speed);
				$(window).off("touchmove._noscroll");
				$(this).removeClass('active');
			}else{
				$(target).fadeIn(this.speed);
				$(this.filter).fadeIn(this.speed);
				$('#spnavi_close').fadeIn(this.speed);
				scroller = new IScroll(target, {
					mouseWheel:true,
					preventDefault: false
				});
				if(_touches){
					$(window).on("touchmove._noscroll" , function(event) {
						event.preventDefault();
					});
				}
				$(this).addClass('active');

				if(cb.length > 0){
					for (let i=0;i<cb.length;i++) {
						cb[i](scroller);
					}
				}

			}
		});

		const r = new Responsive();

		$(window).on('load resize',function(){
			if(r.state()() === false){
				$(target).hide();
			}
		});
	}
}
module.exports = SpNavi;
