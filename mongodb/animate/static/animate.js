(function() {
  var projectTitle = function projectTitle (keyFrame) {
    var $rec = $('#col0 var.array>div').first();
    var $fields = $rec.children('._id, .title');
    var $outRec = $('#rec1_0');
    var $moving = $fields.eq(0).clone();
    $moving.hide();
    switch (keyFrame) {
      case 1:
        $rec.addClass('current-record');
        break;
      case 2:
        $('body').append($moving);
        $moving.addClass('selected-field'); //.wrapAll('<pre id="moving">');
        $moving.css($.extend({'position':'absolute'}, $fields.eq(0).offset()));
        $moving.fadeIn(100);
        break;
      case 3:
        $outRec.slideDown(1000);
        break;
      case 4:
        //$moving.animate($outRec.offset(), 1000, 'swing');
        $moving.animate({'left':'200px', 'top':'300px'}, 1000, 'swing');
        console.log("animate");
        break;
      default:
        console.log('keyFrame = ', keyFrame);
    }
  };
  // when ready
  $(function() {
    var keyFrame = 0;
    var LAST_FRAME = 9999;
    $('body').keyup(function(event) {
      switch (event.keyCode) {
        case 37:
          if (keyFrame>0) {keyFrame--;}
          break;
        case 39:
          if (keyFrame<LAST_FRAME) {keyFrame++;}
          break;
      }
      projectTitle(keyFrame);
    });
    //100_pr_title
  });
})();
