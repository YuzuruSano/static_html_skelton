export default class ToTop{
	constructor({
		target = "#totop",
		stop_at = "#footer",
		fixer = 100,
		speed = 200,
		stop = true
	}) {
		this.target = target;
		this.stop_at = stop_at;
		this.fixer = fixer;
		this.speed = speed;
		this.stop = stop;
	}
	/**
	 * フッター手前でボタンを止める
	 * position fixed or relativeを切り替えるだけなのでhtml構造による位置調整や左右位置などはDOM/CSSで別途調整必要
	 * @return none
	 */
	clear_fixed_position(){
		let scrollHeight = $(document).height();
		let scrollPosition = $(window).height() + $(window).scrollTop();
		let footHeight = $(this.stop_at).innerHeight();

		if ( scrollHeight - scrollPosition  <= footHeight ) {
			$(this.target).css({
				"position":"absolute",
				"bottom": footHeight + 30
			});
		} else { //それ以外の場合は
			$(this.target).css({
				"position":"fixed",
				"bottom": 30
			});
		}
	}

	exec(){
		const [target,fixer,speed] = [this.target,this.fixer,this.speed];
		const _this = this;

		$(window).on('load scroll',function(){
			if($(this).scrollTop() > fixer){
				$(target).fadeIn(speed);
			}else{
				$(target).fadeOut(speed);
			}

			if(_this.stop){
				_this.clear_fixed_position();
			}
		});
	}
}
