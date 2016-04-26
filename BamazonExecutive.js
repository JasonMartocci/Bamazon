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
	console.log("\n");
	console.log("Welcome to Bamazon!");
	console.log("Please select 1 or 2");
	console.log("1) View Product Sales by Department");
	console.log("2) Create New Department");
	console.log("\n");
	prompt.get(['bamazonNav'], function (err, result, bamazonNav) {
		if (result.bamazonNav == "1"){
			for(var i=0;i<rows.length;i++){
				console.log(("ItemId: " + rows[i].ItemID) + " | " + " " + rows[i].ProductName + " | $" + rows[i].Price + " | " + rows[i].StockQuantity + " available");
			}
			connection.end();				    
		}else if (result.bamazonNav == "2"){
			for(var i=0;i<rows.length;i++){
				if (rows[i].StockQuantity < 100) {
					console.log(("ItemId: " + rows[i].ItemID) + " | " + " " + rows[i].ProductName + " | $" + rows[i].Price + " | " + rows[i].StockQuantity + " available");
				}
			}
			connection.end();	    
		};

		for(var j=0;j<rows.length;j++){
		};
	});
});