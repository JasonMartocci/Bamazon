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
	console.log("Please select 1, 2, 3 or 4");
	console.log("1) View Products for Sale");
	console.log("2) View Low Inventory");
	console.log("3) Add to Inventory");
	console.log("4) Add New Product");
	console.log("\n");
	prompt.get(['bamazonNav'], function (err, result, bamazonNav) {
		if (result.bamazonNav == "1"){
			for(var i=0;i<rows.length;i++){
				console.log(("ItemId: " + rows[i].ItemID) + " | " + " " + rows[i].ProductName + " | $" + rows[i].Price + " | " + rows[i].StockQuantity + " available");
			}
			connection.end();				    
		}else if (result.bamazonNav == "2"){
			for(var i=0;i<rows.length;i++){
				if (rows[i].StockQuantity < 20) {
					console.log(("ItemId: " + rows[i].ItemID) + " | " + " " + rows[i].ProductName + " | $" + rows[i].Price + " | " + rows[i].StockQuantity + " available");
				}
			}
			connection.end();	    
		}else if (result.bamazonNav == "3"){
			prompt.get(['ItemID', 'StockQuantity'], function (err, result, ItemID) {
				var quantity = result.StockQuantity;
				for(var i=0;i<rows.length;i++){
					console.log(rows[i].StockQuantity);
					// need to fix math not working.
					connection.query("UPDATE Bamazon.Products SET StockQuantity = ? Where ItemID = ?", [(rows[i].StockQuantity + quantity), result.ItemID], function (err, result) {
						if (err) throw err;
					});
				};
				connection.end();
			});
		}else if (result.bamazonNav == "4"){
			prompt.get(['ProductName', 'Price', 'StockQuantity'], function (err, result, ItemID) {
				var ProductName = (result.ProductName);
				console.log(ProductName);
					connection.query("INSERT INTO Bamazon.Products SET ProductName = ?, Price = ?, StockQuantity=?", [result.ProductName, result.Price, result.StockQuantity], function (err, result) {
						if (err) throw err;
					});
				// };
				// connection.end();
			});
		};

		for(var j=0;j<rows.length;j++){
		};
		// console.log("\n");
		// console.log('  Product ItemId: ' + result.ItemID);
		// console.log('  Product Quanity: ' + result.StockQuantity);
	});
});

// function test_prompt(){
// }
// test_prompt();

// connection.end();