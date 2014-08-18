$(function(){

  //DOMcache
  var $jsSortable =  $('.js-sortable');
  //マテリアルボタンのリストの配列
  var $materialButtonList = $('.button.raised');

  //ソート可能にする
  $jsSortable.sortable();

  //イベント設定
  //ドラッグstartしたら
  $jsSortable.bind(
    {
      "sortstart":function(event, ui) {
        //浮き上がらせる
        ui.item.addClass('sorting');
      },
      "sortstop":function(event , ui) {
        //浮き上がるの消す
        ui.item.removeClass('sorting');
      }
    }
  );

});
