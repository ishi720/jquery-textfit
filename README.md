# jquery-textfit

文字がはみ出ないように制御するjsです。

jQuery必須です。


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

