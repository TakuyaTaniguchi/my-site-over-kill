---
templateKey: blog-post
title: 'perfect-scrollbarの事始め '
date: 2019-04-24T14:13:36.203Z
description: |
  perfect-scrollbarの最小構成
location: '{"type":"Point","coordinates":[-42.5594856,1.7868871]}'
author: Rin
---
稀にスクロールバーのカスタマイズが必要な場面があります。

そんな時に便利なライブラリをご紹介します。

[perfect-scrollbar](https://github.com/utatti/perfect-scrollbar)　

こちらのライブラリがあれば非常に簡単にスクロールバーの実装が可能です。

例によってCodeSandBoxを確認してください。

<iframe src="https://codesandbox.io/embed/8yj089vo20?fontsize=14" title="perfect-scrollbar" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

wrapする要素に、heightとposition:relative;を加えています。

今のところスクロールバーのclass名は変更できなさそうなので、セレクタに重みをつけて変更する必要がありそうです。

自力での実装を考えるとそこそこ大変そうな印象ですが、このライブラリがあると非常に助かりますね。
