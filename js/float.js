$(function(){
  var $materialButtonList = $('.button.raised');
  $materialButtonList.bind(
    {
    "touchstart": function(){
      $(this).addClass('sorting');
    },
    "touchend": function(){
      $(this).removeClass('sorting');
    }
  });
});
