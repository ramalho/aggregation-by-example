(function() {
  var project_title = function project_title () {
    var $rec = $('#col0 var.array>div').first();
    $rec.addClass('current-record');
    var $fields = $rec.children('._id, .title');
    $fields.addClass('selected-field');
  };
  // when ready
  $(function() {
    //100_pr_title
    project_title();
  });
})();
