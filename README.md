# jquery-textfit

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3afdbf0526dd463498341a3901115480)](https://app.codacy.com/app/ishi720/jquery-textfit?utm_source=github.com&utm_medium=referral&utm_content=ishi720/jquery-textfit&utm_campaign=Badge_Grade_Dashboard)

文字がはみ出ないように制御するjsです。

jQuery必須です。



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
textShrinkCut( selector, repeat, leader );
```

**説明**

- 要素から文字がはみ出たら小さくします。それでもはみ出る場合は、文字を削ります。

**パラメータ**

- selector: cssセレクタ
- repeat: 繰り返す上限回数(省略可。デフォルト10)
- leader: 省略文字 (省略可。デフォルト"…")


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

