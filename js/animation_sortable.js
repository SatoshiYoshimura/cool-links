jQuery(function(){

  // loop through the original items...
  jQuery("#original_items li").each(function(){

    // clone the original items to make their
    // absolute-positioned counterparts...
    var item = jQuery(this);
    var item_clone = item.clone();
    // 'store' the clone for later use...
    item.data("clone", item_clone);

    // set the initial position of the clone
    var position = item.position();
    item_clone.css("left", position.left);
    item_clone.css("top", position.top);

    // append the clone...
    jQuery("#cloned_items").append(item_clone);
  });

  // create our sortable as usual...
  // with some event handler extras...
  jQuery("#original_items").sortable({

    // on sorting start, hide the original items...
    // only adjust the visibility, we still need
    // their float positions..!
    start: function(e, ui){
      // loop through the items, except the one we're
      // currently dragging, and hide it...
      ui.helper.addClass("exclude-me");
      jQuery("#original_items li:not(.exclude-me)")
      .css("visibility", "hidden");

      // get the clone that's under it and hide it...
      ui.helper.data("clone").hide();
    },

    stop: function(e, ui){
      // get the item we were just dragging, and
      // its clone, and adjust accordingly...
      jQuery("#original_items li.exclude-me").each(function(){
        var item = jQuery(this);
        var clone = item.data("clone");
        var position = item.position();

        // move the clone under the item we've just dropped...
        clone.css("left", position.left);
        clone.css("top", position.top);
        clone.show();

        // remove unnecessary class...
        item.removeClass("exclude-me");
      });

      // make sure all our original items are visible again...
      jQuery("#original_items li").css("visibility", "visible");
    },

    // here's where the magic happens...
    change: function(e, ui){
      // get all invisible items that are also not placeholders
      // and process them when ordering changes...
      jQuery("#original_items li:not(.exclude-me, .ui-sortable-placeholder)").each(function(){
        var item = jQuery(this);
        var clone = item.data("clone");

        // stop current clone animations...
        clone.stop(true, false);

        // get the invisible item, which has snapped to a new
        // location, get its position, and animate the visible
        // clone to it...
        var position = item.position();
        clone.animate({
          left: position.left,
          top:position.top}, 500);
      });
    }
  });
});
