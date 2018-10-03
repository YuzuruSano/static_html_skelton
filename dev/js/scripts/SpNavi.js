import Responsive from './Responsive';
import IScroll from 'iscroll';

export default class SpNavi{
	constructor(param) {
		this.touches = typeof document.ontouchstart != "undefined",
		this.target = param.target;
		this.trigger = param.trigger;
		this.filter = param.filter;
		this.speed = param.speed;
		this.scroll;
		this.fixer = param.fixer;
		this.current_scrollY = 0;
	}

	scrollOff( e ){
		e.preventDefault();
	}

	close(targetObj){
		/**
		 * toggle appearance
		 */
		$(this.target).fadeOut(this.speed);
		$(this.filter).fadeOut(this.speed);
		targetObj.removeClass('active');
		/**
		 * return touchmove,adjust body position
		 */
		document.removeEventListener( 'touchmove', this.scrollOff, {passive: false} );
		$('body,html').animate( { scrollTop: this.current_scrollY },1 );
		$('body').attr( { style: '' } );
	}

	open(targetObj,callbacks){
		/**
		 * set var
		 */
		this.current_scrollY = $(window).scrollTop();
		let scroller;
		/**
		 * prevent touchmove,adjust body position
		 */
		document.addEventListener( 'touchmove',this.scrollOff, {passive: false});
		$('body').css({'position':'fixed',width: '100%',top: -1 * this.current_scrollY});
		/**
		 * toggle appearance
		 */
		$(this.target).fadeIn(this.speed);
		$(this.filter).fadeIn(this.speed);
		targetObj.addClass('active');
		/**
		 * fire scroller
		 */
		scroller = new IScroll(this.target, {
			scrollX: false,
			preventDefault: false,
			disablePointer: true,
			disableTouch: false,
			mouseWheel: true
		});
		/**
		 * exec callbacks
		 */
		if(callbacks.length > 0){
			for (let i = 0;i < callbacks.length;i++) {
				callbacks[i](scroller);
			}
		}
	}

	exec(...callbacks){
		/**
		 * bind this
		 */
		let _that = this;
		/**
		 * set fixser
		 */
		$(_that.target).find('#scroller > .inner').css({'padding-bottom':this.fixer});
		/**
		 * click event
		 */
		$(this.trigger).on('click',function(ev){
			let status = $(_that.target).css('display');
			if(status == 'block'){
				_that.close($(this));
			}else{
				_that.open($(this),callbacks);
			}
			ev.preventDefault();
		});
	}
}
