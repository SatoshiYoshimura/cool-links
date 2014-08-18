$(function(){
  // Waves plugin activated.
  Waves.displayEffect();

  // focus a line of list
  (function(){
    var stretchLength = 5;
    var margin = 10;
    var borderStyle = '#259b24 1px solid';
    var $jsListLi = $('#js-list li');
    
    var defaultList = {
      width: $jsListLi.width(),
      height: $jsListLi.height()
    };

    $jsListLi.click(function(){
      var $thisList = $(this);
      var targetList = {
        width: $thisList.width(),
        height: $thisList.height(),
      };
      var index = $thisList.index();
     
      $jsListLi.not($thisList)
        .css({
          borderBottom: 'none',
          width: defaultList.width,
          height: defaultList.height,
          left: 0,
          margin: 0
        });
      //一個上のLineにborder-bottom追加
      $jsListLi.eq(index-1).css({
        borderBottom: borderStyle
      });

      if(!$thisList.hasClass('selected')) {
        $jsListLi.removeClass('selected');
        // focusの挙動
        $thisList
          // .css(focuesed(targetList))
          .css({
            borderBottom: borderStyle,
            width: targetList.width + stretchLength * 2,
            left: - stretchLength,
            margin: margin + 'px 0'
          })
          .addClass('selected');
      }
    });
    // $jsListLi#click() ends.
  })();
});
