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
				if(!$(this).hasClass('nosms')){
					ev.preventDefault();
					var speed = 800; //移動スピード
					var href= $(this).attr("href");
					var target = $(href === "#" || href === "" ? 'html' : href);
					var position = target.offset().top;
					$('body,html').animate({scrollTop:position}, speed, 'swing');
					return false;
				}
			});
		}
	}
}
module.exports = SmoothScroll;
