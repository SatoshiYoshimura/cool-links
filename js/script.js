$(function(){
  // Waves plugin activated.
  Waves.displayEffect();

  // heightを100%に
  (function(){
    $('#wrap').height($(window).height());
  })();

  // focus a line of list
  (function(){
    var stretchLength = 5;
    var margin = 10;
    var borderStyle = '#259b24 1px solid';
    var $jsListLi = $('#original_items li');
    
    var defaultList = {
      width: $jsListLi.width(),
      height: $jsListLi.height()
    };

    $jsListLi.stop(true, true).click(function(){
      var $thisList = $(this);
      var targetList = {
        width: $thisList.width(),
        height: $thisList.height(),
      };
      var index = $thisList.index();
     
      $jsListLi.find('dd').hide();
      $jsListLi.not($thisList)
        .css({
          borderBottom: 'none',
          width: defaultList.width,
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
          .css({
            borderBottom: borderStyle,
            width: targetList.width + stretchLength * 2,
            left: - stretchLength,
            margin: margin + 'px 0'
          })
          .addClass('selected');
      
      }
        setTimeout(function(){
          $thisList.find('dd').slideToggle();
        }, 500);
    });
    // $jsListLi#click() ends.
  })();
});
