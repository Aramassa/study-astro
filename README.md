# study-astro
Study Astro!!

## 0_1 Astro を動かしてみよう

* Astro の開発サーバを起動する
* React コンポーネントを表示する

```sh
npm create astro@latest
npm run astro add react
npm run dev -- --host 0.0.0.0
```

初めて React 使いやすいと思った。こんなにあっさり使えるなんて素晴らしい...!!

## 0_2 複数のコンポーネントを強調させて動かしてみよう

0_1 では単一のコンポーネントで簡単なイベントを実行しました。
0_2 ではさらに、複数のコンポーネント A,B を用意して、Aのボタンから Bのコンポーネントに作用するアプリケーションを書いてみよう

https://www.twilio.com/ja/blog/react-choose-functional-components-jp

クラスよりも関数を使う方が今後は主流になっていきそうとのこと。

[カスタムフックの使い方](https://qiita.com/cheez921/items/af5878b0c6db376dbaf0)

## 1_1 サーバサイドと通信してみよう

ページ内のコンテンツを、サーバサイド API と通信して更新する用にしてみよう

ChatGPT の APIを使うと良い

## 2_1 Static Generation やってみよう

静的サイトを出力するというのをやってみよう？（できるのかな？)