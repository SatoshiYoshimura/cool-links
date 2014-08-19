$(function(){
  var $materialButtonList = $('.js-button');
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
