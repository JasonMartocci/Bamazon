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
	for(var i=0;i<rows.length;i++){
		console.log(("ItemId: " + rows[i].ItemID) + " | " + " " + rows[i].ProductName + " | $" + rows[i].Price.toFixed(2) + " | " + rows[i].StockQuantity + " available");
	}
	console.log("\n");
	prompt.get(['ItemID', 'StockQuantity'], function (err, result, ItemID) {
		for(var j=0;j<rows.length;j++){
			var totalSales = result.StockQuantity*rows[j].Price;
			if (result.ItemID == rows[j].ItemID){
				if (result.StockQuantity <= rows[j].StockQuantity){
					console.log("\n");
					console.log("Thank You for purchasing " + result.StockQuantity + " packages of " + rows[j].ProductName);
					console.log("Total cost of your purchase: " + "$" + (totalSales));
					connection.query("UPDATE Bamazon.Products,Bamazon.Departments SET StockQuantity = ?, TotalSales = ? Where ItemID = ?", [(rows[j].StockQuantity - result.StockQuantity),totalSales, result.ItemID], function (err, result) {
					    if (err) throw err;
					    connection.end();
					  });					    
				}else{
					console.log(rows[j].StockQuantity + " Insufficient quantity");
					connection.end();
				};
			}else if (result.ItemID != rows[j].ItemID){
				// console.log("You did not select available ItemID");
			}else{
				// console.log("Broken");
			}
		};
	});
});