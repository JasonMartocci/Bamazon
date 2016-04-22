var mysql = require('mysql');
var prompt = require('prompt');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'q1w2e3r4',
  database: 'Bamazon'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

connection.query("SELECT * FROM Bamazon.Products", function(err, rows, fields) {
	if (err) throw err;
	console.log("Welcome to Bamazon!");
	for(var i=0;i<rows.length;i++){
		console.log(("ItemId: " + rows[i].ItemID) + " " + rows[i].ProductName + " | $" + rows[i].Price.toFixed(2) + " | " + rows[i].StockQuantity + " available");
	}
	prompt.get(['ItemID', 'StockQuantity'], function (err, result, ItemID) {
		for(var j=0;j<rows.length;j++){
			if (result.StockQuantity <= rows[j].StockQuantity){
				console.log(rows[j].StockQuantity - result.StockQuantity);
				console.log(rows[j].StockQuantity + " they match");
			}else{
				console.log(rows[j].StockQuantity + " Insufficient quantity");
			};
		};
		console.log("\n");
		console.log('  Product ItemId: ' + result.ItemID);
		console.log('  Product Quanity: ' + result.StockQuantity);
	});
});

// function test_prompt(){
// }
// test_prompt();

connection.end();