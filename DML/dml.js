// select all clumans
SELECT *
FROM students;

//select multiple column
SELECT Roll,Name,GPA
FROM students;

//show select query limit only show 5 cluman
SELECT *
FROM students
LIMIT 5;

//remove all duplicate value
SELECT DISTINCT City
FROM students;

//Ascending order
SELECT Roll,Name
FROM students
ORDER BY Name;

//Descending order
SELECT Roll,Name
FROM students
ORDER BY Name DESC;

//where keyWord conditional search
SELECT *
FROM students
WHERE Age=23;

SELECT *
FROM students
WHERE GPA<4.00;

SELECT Roll,Name,GPA
FROM students
WHERE GPA>4.00
ORDER BY GPA DESC;

//Relational Operator BETWEEN and !=
SELECT Roll,Name,GPA
FROM students
WHERE Roll BETWEEN 103 AND 106;

SELECT Roll,Name,GPA
FROM students
WHERE Roll!=101;

//AND, OR | Logical Operator in SQL
SELECT *
FROM students
WHERE Gender='Meal' AND GPA=4.33;

SELECT *
FROM students
WHERE Gender='Meal' OR GPA=4.33;

SELECT *
FROM students
WHERE Gender='Meal' AND (GPA=4.33 OR City='Khulna');

//NOT , IN | Logical Operator in SQL
SELECT *
FROM students
WHERE City IN('Dhaka','Khulna');

SELECT *
FROM students
WHERE City NOT IN('Dhaka','Khulna');

//LIKE | Logical Operator
SELECT *
FROM students
WHERE Name LIKE 'H%';//'%h', '_u%', '%hi%', '%i_'

SELECT *
FROM students
WHERE Name LIKE '%n';

SELECT *
FROM students
WHERE Name LIKE '%hi%';

SELECT *
FROM students
WHERE Name LIKE '%i_';

SELECT *
FROM students
WHERE Name LIKE '_u%';

// AS Keyword for custom name
SELECT Roll AS ID, Name AS 'Full Name'
FROM students;

//Constraint, AUTO_INCREMENT SQL
CREATE TABLE teachers
(
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(15) NOT NULL,
    Salary double(10,2),
    PRIMARY KEY(ID)
);

// UPDATE Statement
UPDATE teachers
SET Name='Sanim'
WHERE ID=103;

UPDATE teachers
SET Name='Pane',Salary=5000
WHERE ID=103;

UPDATE teachers
SET Salary= Salary-5000
WHERE Salary>25000;

// DELETE Statement in SQL
DELETE FROM teachers
WHERE ID>105;