var response = db.books.aggregate({
	$project : {
		stock: 1
	}
});

response.result.forEach(printjson);
