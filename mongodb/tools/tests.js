test( "get first line", function() {
	markLines();
	var line = $("col0")[0];
  ok( line.is("pre"), "first tagName" + line.tagName());
});
