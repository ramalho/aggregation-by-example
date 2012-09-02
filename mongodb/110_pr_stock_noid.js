var response = db.books.aggregate({
	$project : {
		_id: 0,
		stock: 1
	}
});

response.result.forEach(printjson);
