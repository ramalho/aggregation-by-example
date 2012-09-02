var response = db.books.aggregate({
	$project : {
		title: 1
	}
});

response.result.forEach(printjson);
