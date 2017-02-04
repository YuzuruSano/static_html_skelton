class Accordion{
	constructor(target) {
		this.target = target;
	}

	exec(){
		$(this.target).on('click',function(){
			let next = $(this).next();
			let state = next.css('display');
			if(state == 'block'){
				next.slideUp(200);
			}else{
				next.slideDown(200);
			}
		});
	}
}
module.exports = Accordion;
