var response = db.books.aggregate({
	$group : {
		_id : null,
		count : {$sum : "$stock"}
	}
});

response.result.forEach(printjson);
