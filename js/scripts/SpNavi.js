var IScroll = require('../../lib/js/iscroll/iscroll.js');

class SpNavi{
	constructor(param) {
		console.log(param);
		this.touches = typeof document.ontouchstart != "undefined",
		this.target = param.target;
		this.trigger = param.trigger;
		this.filter = param.filter;
		this.speed = param.speed;
		this.scroll;
		this.fixer = param.fixer;
	}

	exec(){
		const [target,_touches] = [this.target , this.touches];
		let th = 0;

		//set height
		if (this.touches) {
			th = window.innerHeight;
		}else{
			th = $(window).height();
		}

		$(target).height(th).find('#scroller > ul').css({'padding-bottom':this.fixer});//padding-bottomhは環境に合わせて調整

		//set click event
		$(this.trigger).on('click',function(ev){
			ev.preventDefault();

			let status = $(target).css('display');

			if(status == 'block'){
				$(target).fadeOut(this.speed);
				$(this.filter).fadeOut(this.speed);
				$(window).off("touchmove._noscroll");
				$(this).removeClass('active');
			}else{
				$(target).fadeIn(this.speed);
				$(this.filter).fadeIn(this.speed);
				let Scroll = new IScroll(target, {
					mouseWheel:true,
					preventDefault: false
				});
				if(_touches){
					$(window).on("touchmove._noscroll" , function(event) {
						event.preventDefault();
					});
				}
				$(this).addClass('active');
			}
		});
	}
}
module.exports = SpNavi;
