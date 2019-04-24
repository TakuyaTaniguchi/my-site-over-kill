---
templateKey: blog-post
title: perfect-scrollbarでスクロールバーをカスタマイズする。
date: 2019-04-24T14:44:57.826Z
description: perfect-scrollbar最小構成
tags:
  - javascripts
location: '{"type":"Point","coordinates":[-48.1350988,-14.1349295]}'
author: RIn
---
稀にスクロールバーのカスタマイズが必要な場面があります。そんな時に便利なライブラリをご紹介します。perfect-scrollbar　こちらのライブラリがあれば非常に簡単にスクロールバーの実装が可能です。例によってCodeSandBoxを確認してください。<iframe src="https://codesandbox.io/embed/8yj089vo20?fontsize=14" title="perfect-scrollbar" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>wrapする要素に、heightとposition:relative;を加えています。今のところスクロールバーのclass名は変更できなさそうなので、セレクタに重みをつけて変更する必要がありそうです。自力での実装を考えるとそこそこ大変そうな印象ですが、このライブラリがあると非常に助かりますね。
