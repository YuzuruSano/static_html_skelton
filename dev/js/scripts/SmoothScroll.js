export default class SmoothScroll{
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
			$('a[href*="#"]').not(".nosms").click(function() {
			let speed = 600, // ミリ秒(この値を変えるとスピードが変わる)
			href = $(this).prop("href"), //リンク先を絶対パスとして取得
			hrefPageUrl = href.split("#")[0], //リンク先を絶対パスについて、#より前のURLを取得
			currentUrl = location.href; //現在のページの絶対パスを取得

			currentUrl = currentUrl.split("#")[0]; //現在のページの絶対パスについて、#より前のURLを取得
			//#より前の絶対パスが、リンク先と現在のページで同じだったらスムーススクロールを実行
			if(hrefPageUrl == currentUrl){

				//リンク先の#からあとの値を取得
				href = href.split("#");
				href = href.pop();
				href = "#" + href;

				//スムースクロールの実装
				let target = $(href == "#" || href == "" ? 'html' : href);
				if(target.length > 0){
					let position = target.offset().top; //targetの位置を取得
					$('body,html').animate({scrollTop: position}, speed, 'swing', function() {
						//スムーススクロールを行ったあとに、アドレスを変更(アドレスを変えたくない場合はここを削除)
						if(href != "#top" && href !="#") {
							location.href = href;
						}
					});
				}

				if($('.spnavi').css('display') == 'block'){
					$('.btn_sp_navi').click();
				}

				return false;
			}

			});
		}
	}
}
