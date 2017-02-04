class Responsive {
	getState(){
		if($('#responsive_flg').css('display') == 'block'){
			return true;
		}
		return false;
	}
	state(){
		return _.throttle(this.getState, 500);
	}
}
module.exports = Responsive;
