export default class Util{
	/**
	 * スクロール検知対象（window or body）を取得
	 * @returns Element
	 */
	scrollingElement(): Element | null{
		if ('scrollingElement' in document) {
			return document.scrollingElement;
		}
		// Fallback for legacy browsers
		if (navigator.userAgent.indexOf('WebKit') != -1) {
			return document.body;
		}
		return document.documentElement;
	}

	/**
	 * スクロール量の取得
	 * @returns 
	 */
	scrollTop() : number {
		const scrollingElement = this.scrollingElement();
		return (scrollingElement) ? scrollingElement.scrollTop : 0;
	}
}