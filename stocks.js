dataSet = [
{"name": "Apple", "price": 191, "marketCap": 942},
{"name": "Google", "price": 1130, "marketCap": 791},
{"name": "Facebook", "price": 189, "marketCap": 556},
{"name": "Microsoft", "price": 101, "marketCap": 793},
{"name": "Oracle", "price": 48, "marketCap": 196},
{"name": "Tesla", "price": 317, "marketCap": 54},
{"name": "IBM", "price": 146, "marketCap": 133},
{"name": "Amazon", "price": 1683, "marketCap": 820}
];


dataSet.sort(function (a, b){
	return parseFloat(b.marketCap) - parseFloat(a.marketCap);
});

//console.log(dataSet); //--> to check sorted dataset


