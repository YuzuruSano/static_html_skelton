import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


gsap.to('.object-square', { //アニメーションしたい要素を指定
  x: 500, //横に800px動かす
  scrollTrigger: {
    trigger: '.js-animation-normal',//アニメーションが始まるトリガーとなる要素
    start: 'top 80%', //アニメーションが始まる位置を指定
    end: 'bottom center',
    //スクロール量に合わせてアニメーションが進む（数字も指定できる）
    //scrub:1など数字を入れるとスクロール量にあわせて、１秒間余韻をもって動き続けます。
    scrub: true,
    markers: true,
  }
});