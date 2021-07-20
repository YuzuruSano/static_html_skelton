/**
 * メディアクエリに該当するかの判定
 */
export default class MatchMedia {
  private queries:Object;
  private is_mobile_first:Boolean;

  /**
   * 
   * @param queries 判定したいメディアクエリをキーとトリガーするpxで指定する
   * @param is_mobile_first trueにすると基準がmin-widthになる。デフォルトはmax-width
   */
  constructor(queries = {
    sm : 640,
    md : 768,
    lg : 1024,
    xl : 1280
  }, is_mobile_first = false){
    this.queries = queries;
    this.is_mobile_first = is_mobile_first;
  }

  /**
   * キーに該当する画面幅状態であるかを返却する
   * @param メディアクエリ定義オブジェクトのキー
   * @returns bool
   */
  is(key: string = ''): Boolean{
    const basis = this.is_mobile_first ? 'min' : 'max';
    if (this.queries[key]){
      const q = `screen and (${basis}-width: ${this.queries[key]}px)`
      return window.matchMedia(q).matches;
    }

    return false;
  }
}
