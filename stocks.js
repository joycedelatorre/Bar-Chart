
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
		$(".table-svg-chart").append("<tr class='tooltip' rowId="+ i +
			"><td><input type='checkbox' class='chex'id='"+ i +"' value=''></td><td class='tdName'>"+ dataSet[i].name +"&#8212;"+
			"</td><td class='tdSvg'><svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' class='chart' width='1000' height='19' aria-labelledby='title' role='img'><g class='bar'><rect width='"+dataSet[i].marketCap+"' height='19'></rect></g></td><td><span class='tooltiptext'>Price: "+dataSet[i].price+" MarketCap: "+dataSet[i].marketCap+"</span></td></tr>"
		);
	}
}

renderChart();
//-----------------------------------------------------------------
//Check box

var numberOfChecked;
var sum = 0;
var highestPrice=0;

function summation(data){
	sum = sum + dataSet[data.id].price;
  	$('.totPrice').empty();
	  $('.totPrice').append(sum);
}

function uncheckedSummation(data){
	sum = sum - dataSet[data.id].price;
  	$('.totPrice').empty();
	  $('.totPrice').append(sum);
}

function ave(){
	average = sum/numberOfChecked
	  $('.avePrice').empty();
	  $('.avePrice').append(average);
}

function checkHighestPrice(){
	console.log('hello');
	for(var i=0; i<dataSet.length; i++){
		console.log(this + "<-----");
		if($(this).prop("checked")){
			console.log(dataSet[this.id].name);
			if(highestPrice < dataSet[this.id].price){
				highestPrice = dataSet[this.id].price
				$('.highPrice').empty();
	 			$('.highPrice').append(dataSet[this.id].name);	
			}
		}
	}
}

$( ".chex" ).click(function() {
	checkHighestPrice();
  numberOfChecked= $('input:checkbox:checked').length;
  $('.numSelect').empty();
  $('.numSelect').append(numberOfChecked);

  if ($(this).is(":checked")){
  	console.log(dataSet[this.id]);
  	summation(this);
  	ave();

	  // if(highestPrice.is('undefined')){
	  	//highestPrice = dataSet[this.id].price
	  	// $('.highPrice').empty();
	 		// $('.highPrice').append(highestPrice);	
	  // } else 
	  if(highestPrice < dataSet[this.id].price){
	  	highestPrice = dataSet[this.id].price
	  	$('.highPrice').empty();
	 		$('.highPrice').append(dataSet[this.id].name);	
	  } 
	  // else{
	  // 	$('.highPrice').empty();
	 	// 	$('.highPrice').append(dataSet[this.id].name);	
	  // }

  } else{ // else if unchecked
  	checkHighestPrice();
	  uncheckedSummation(this);
	  ave();
  }
	console.log(numberOfChecked);
});

});

