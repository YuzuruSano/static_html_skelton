class SmoothScroll{
	constrctor() {
		this.canEdit = false;
	}
	checkCanEdit(){
		if("CCM_EDIT_MODE" in window){
			this.canEdit = CCM_EDIT_MODE;
		}
		return this.canEdit;
	}
	exec(){
		this.checkCanEdit();
		if(!this.canEdit){
			$('a[href^="#"]').click(function(ev) {
				ev.preventDefault();
				let speed = 800; //移動スピード
				let href= $(this).attr("href");
				let target = $(href === "#" || href === "" ? 'html' : href);
				if(target.length > 0){
					let position = target.offset().top;
					$('body,html').animate({scrollTop:position}, speed, 'swing');
					return false;
				}
			});
		}
	}
}
module.exports = SmoothScroll;
