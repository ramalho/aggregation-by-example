var response = db.books.aggregate({
	$group : {
		_id : "$price.currency",
		count : {$sum : 1}
	}}
);

response.result.forEach(printjson);
