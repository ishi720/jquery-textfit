# jquery-textfit

[![npm version](https://badge.fury.io/js/jquery-textfit.svg)](https://badge.fury.io/js/jquery-textfit)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/54a82003878a4a228404ce0bc3e82108)](https://app.codacy.com/gh/ishi720/jquery-textfit/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

文字がはみ出ないように制御するjsです。

jQuery必須です。

### 2023/5/3 追記 jQueryに依存しないpackageを作成しました →　[textfitJS](https://github.com/ishi720/textfitJS)


# SAMPLE

https://ishi720.github.io/jquery-textfit/

# インストール

- npm

```
npm i jquery-textfit
```

- yarn

```
yarn add jquery-textfit
```

# 使い方

-----------

### textShrinkCut()

```js
textShrinkCut( selector, leader, repeat );
```

**説明**

- 要素から文字がはみ出たら小さくします。それでもはみ出る場合は、文字を削ります。

**パラメータ**

- selector: cssセレクタ
- leader: 省略文字 (省略可。デフォルト"…")
- repeat: 繰り返す上限回数(省略可。デフォルト10)


-----------

### textCut()

```js
textCut( selector, leader )
```

**説明**

- 要素から文字がはみ出たら文字を削ります。

**パラメータ**

- selector: cssセレクタ
- leader: 省略文字 (省略可。デフォルト"…")

