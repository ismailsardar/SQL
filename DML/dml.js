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