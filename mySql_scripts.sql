CREATE TABLE Products (ItemID int AUTO_INCREMENT, ProductName varchar(255), DepartmentName varchar(255), Price int, StockQuantity int, PRIMARY KEY (ItemID));

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Crest', 'Health Care', 2.00, 34);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Total Cereal', 'Groceries', 4.00, 10);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Scope', 'Health Care', 4.40, 23);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Raisin Bran', 'Groceries', 3.00, 34);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Dental Floss', 'Health Care', 1.00, 44);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Salmon', 'Seafood', 18.00, 34);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Capt Crunch', 'Groceries', 4.20, 18);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Tuna', 'Seafood', 12.00, 22);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Crabs', 'Seafood', 13.00, 31);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Shrimp', 'Seafood', 16.00, 11);

CREATE TABLE Departments (DepartmentID int, DepartmentName varchar(255), OverHeadCosts int, TotalSales int);

INSERT INTO Departments (DepartmentID, DepartmentName, OverHeadCosts, TotalSales) VALUES ('0001', 'Health Care', 2, 34);

SELECT * FROM Products INNER JOIN Departments ON Products.DepartmentName=Departments.DepartmentName;