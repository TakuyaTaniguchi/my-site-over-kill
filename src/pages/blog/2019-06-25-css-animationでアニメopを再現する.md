---
templateKey: blog-post
title: CSS AnimationでアニメOPを再現する
date: 2019-06-25T00:14:16.061Z
description: |
  アニメOPをCSSで再現するシリーズ 
tags:
  - CSS
  - Animation
location: '{"type":"Point","coordinates":[-62.4531898,0.268384]}'
author: Rin
---
再現するのはこのアニメ

ダンガンロンパ絶望編 OP 「カミイロアワセ」

<iframe width="560" height="315" src="https://www.youtube.com/embed/cL0fu9RUJjc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

冒頭の にゅるっとピンクの棒が出て、テキストがチラチラする演出を再現する。  

作ってみたのはこちら\
(ちょっとサイズの調整がうまく行かなかったので本家サイトで確認できます。)      

<iframe height="427" style="width: 100%;" scrolling="no" title="flicker Animation" src="//codepen.io/Rin_T_T/embed/jjmKQq/?height=427&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Rin_T_T/pen/jjmKQq/'>flicker Animation</a> by Rin_T_T
  (<a href='https://codepen.io/Rin_T_T'>@Rin_T_T</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>  

テキストのチラつき表現だけちょっと手こずりまして,変化の前半だけ、アニメーションを付けたい場合は下記のように指定すると良い感じに表現できました。    

```
@keyframes textFlicker {
  0%{
    opacity: 0;
  }
  15%{
    opacity: 1;
  }
  25%{
    opacity: 0;
  }
  35%{
    opacity: 1;
  }
  45%{
    opacity: 0;
  }
  55%{
    opacity: 1;//ここでアニメーション終了
  }
  100%{
    opacity: 1;//55%の状態を維持する。
  }
}
```
