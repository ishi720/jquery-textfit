//スクロールが発生していないかチェックする
$.fn.extend({
    isProtrudeWidth: function(){
        var orgScrollLeft = this.scrollLeft();
        this.scrollLeft(0);
        this.scrollLeft(1);
        var result = (this.scrollLeft() > 0);
        this.scrollLeft(orgScrollLeft);
        return result;
    },
    isProtrudeHeight: function(){
        var orgScrollTop = this.scrollTop();
        this.scrollTop(0);
        this.scrollTop(1);
        var result = (this.scrollTop() > 0);
        this.scrollTop(orgScrollTop);
        return result;
    }
});

/**
* 要素から文字がはみ出たら小さくする
* @param selector cssセレクタ
* @param leader 省略文字
* @param repeat 繰り返す上限値
*/
function textShrinkCut( selector, leader, repeat ) {

    if( !leader ){
        leader = "…";
    }

    if( !repeat ){
        repeat = 10;
    }

    //一時的にスクロールバーをつける
    $(selector).css('overflow-y','hidden');

    for (var i = 0; $(selector).isProtrudeHeight() === true || i >= repeat ; i++) {

        if( i >= repeat - 1){
            //文字を省略する
            textCut(selector,leader);
            break;// 繰り返しの上限達した場合はループを抜ける
        }

        //下限判定(メモ：Chromeの最小値が10px)
        if ( parseInt($(selector).css('font-size')) <= 10 ){
            //文字を省略する
            textCut(selector);
            break;// 繰り返しの上限達した場合はループを抜ける
        } else {
            //サイズを調整
            $(selector).css(
                'font-size', parseInt($(selector).css('font-size'))-1 +"px"
            );
        }
    }
    //スクロールバーを消す
    $(selector).css('overflow-y','visible');
}

/**
* 要素から文字がはみ出たら後ろの文字を消して…にする
* @param selector cssセレクタ
* @param leader 省略文字
*/
function textCut(selector,leader){

    if( !leader ){
        leader = "…";
    }

    $(selector).each( function(i,element ){

        var jq_ele = $(element);
        var str = element.innerHTML;

        //一時的にスクロールバーをつける
        element.style.overflowY = 'hidden';

        while( jq_ele.isProtrudeHeight() === true ){

            if(str.length <= 0){
                break;
            }

            //末尾の文字を削る
            str = str.slice( 0, -1 ); 
            //文字をセットする
            element.innerHTML = str + leader;
        }

        //スクロールバーを消す
        element.style.overflowY = 'visible';
    });
}