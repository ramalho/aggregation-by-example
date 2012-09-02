var response = db.books.aggregate({
	$group : {
		_id : "$language",
		count : {$sum : 1}
	}
});

response.result.forEach(printjson);
