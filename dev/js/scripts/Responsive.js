export default class Responsive {
	getState(){
		if($('#responsive_flg').css('display') == 'block'){
			return true;
		}
		return false;
	}
	state(){
		return _.throttle(this.getState, 500);
	}
	isPhone(){
		if((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPod') == -1) || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0){
			return true;
		}
		return false;
	}
}
