var response = db.books.aggregate({
	$group : {
		_id : null,
		count : {$sum : 1}
	}
});

response.result.forEach(printjson);
