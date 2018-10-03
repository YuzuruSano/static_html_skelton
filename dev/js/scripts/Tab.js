export default class Tab{
	constructor(btn,target) {
		this.btn = btn;
		this.target = target;
	}

	exec(){
		const btn = $(this.btn);
		const target = $(this.target);

		btn.click(function() {
			let index = btn.index(this);

			target.css('display','none');
			target.eq(index).css('display','block');

			btn.removeClass('active');
			$(this).addClass('active');

			return false;
		});
	}
}
