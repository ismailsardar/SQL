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