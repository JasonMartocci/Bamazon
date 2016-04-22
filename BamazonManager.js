var mysql = require('mysql');

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
	console.log('connected as id ' + connection.threadId);
});

var sql = 'SELECT ProductName,DepartmentName,Price,StockQuantity from Bamazon.Products';

var post  = {ProductName: connection.ProductName, DepartmentName: connection.DepartmentName, Price: connection.Price};

console.log(post);

connection.end();