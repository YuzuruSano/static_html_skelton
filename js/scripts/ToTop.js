class ToTop{
	constructor(target,fixer,speed) {
		this.target = target;
		this.fixer = fixer;
		this.speed = speed;
	}

	exec(){
		const [target,fixer,speed] = [this.target,this.fixer,this.speed];

		$(window).on('load scroll',function(){
			if($(this).scrollTop() > fixer){
				$(target).fadeIn(speed);
			}else{
				$(target).fadeOut(speed);
			}
		});
	}
}
module.exports = ToTop;
