// Step 1 sort the dataset into a descending order
// 2. render a chart as you loop through the dataset

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

$(document).ready(function(){

// first sort the dataset to achieve the descending order.
dataSet.sort(function (a, b){
	return parseFloat(b.marketCap) - parseFloat(a.marketCap);
});
//console.log(dataSet); //--> to check sorted dataset
// once sorted call the renderChart() to display the chart.

function renderChart(){
	for (var i = 0; i < dataSet.length; i++){
		// console.log(dataSet[i].marketCap);
		$(".table-svg-chart").append("<tr id="+ i +
			"><td><input type='checkbox' id='"+ i +"'></td><td>"+ dataSet[i].name +
			"</td><td><figure><svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' class='chart' width='1000' height='19' aria-labelledby='title' role='img'><g class='bar'><rect width='"+dataSet[i].marketCap+"' height='19'></rect></g></figure></td><td class='popUp'><span class='popuptext'>Price: "+dataSet[i].price+" MarketCap: "+dataSet[i].marketCap+"</span></td>"
		);
	}
}


$( "tr" ).hover(
  function() {
    $( this ).append( $( "<span> *** </span>" ) );
  }
);
 
// $( "td.fade" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });

renderChart();


});

