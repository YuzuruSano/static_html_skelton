/**
 * 外部リンク、PDFなどのファイルリンクに_blankを付与する
 * aタグに._not_blank付与で除外できます
 */
export default class SetLinkClasses{
  private location:String;
  private exclude: tring;

  constructor(exclude: String = '_not_blank'){
    this.location = location.hostname;
    this.exclude = exclude;
  }

  set_external(){
    const elements = document.querySelectorAll<HTMLElement>(`[href^=http]:not([href*="${this.location}"]),[href$=pdf],[href$=xls],[href$=xlsx],[href$=xlsm],[href$=doc],[href$=docx],[href$=pptx],[href$=pptm],[href$=ppt]`);
    
    [...elements].forEach( element => {
      if (!element.classList.contains(this.exclude)){
        element.setAttribute('target', '_blank');
      }
    })
  }
}