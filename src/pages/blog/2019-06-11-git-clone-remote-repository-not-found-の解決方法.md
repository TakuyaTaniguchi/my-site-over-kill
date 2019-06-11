---
templateKey: blog-post
title: 'git clone remote: Repository not found の解決方法'
date: 2019-06-11T12:11:47.443Z
description: '稀にCLIでgit cloneすると発生するので、備忘録的なものを....  '
tags:
  - git
location: '{"type":"Point","coordinates":[-61.2198742,-10.7137054]}'
author: Rin
---
git clone すると　remote: Repository not found ! と言われることがある。

まずは公式の通りに下記を確認する。



https://help.github.com/en/articles/error-repository-not-found

・**Check your spelling**

スペル間違いはありませんか？必ずgithubのページからコピーボタンを押してリンクを取得してください。

・**Checking your permissions**

プライベートリポジトリをクローンしていませんか？

次のいずれかの方法でリポジトリにアクセスできることを確認してください。

※私はよくcollaborator するのを忘れますが、今回は違いました。

\- リポジトリの所有者 (Owner)

\- リポジトリの共同編集者 (collaborator )

\- リポジトリにアクセスできるチームのメンバ（リポジトリが組織に属している場合）

・**Check your SSH access**

> **$ ssh -T git@github.com**
>
> **\> Hi username! You've successfully authenticated, but GitHub does not**
>
> **\> provide shell access.**

\
\
**それでもダメな場合**

Macのキーチェインが悪さをしていることがあります。

githubのキーチェインを削除します。複数ある場合が大半だと思うので、

全て削除します。



![photo](/img/photo.png)

****

CLIでもう一度cloneするとユーザ名とパスワードを聞かれるのでもう一度入力

以降は元どおり、git cloneしても　remote: Repository not found 　と言われないはずです！
