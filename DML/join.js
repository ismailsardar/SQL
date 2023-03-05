//Table Joining
SELECT students.Roll,Reg,Name,Cours_Name,GPA
FROM students,coures
WHERE students.Roll = coures.Roll

SELECT
    S.Roll,
    Reg,
    NAME,
    Cours_Name,
    GPA
FROM
    students AS S,
    coures AS C
WHERE
    S.Roll = C.Roll

// INNER JOIN in SQL
SELECT
    S.Roll,
    Reg,
    Name,
    Cours_Name,
    GPA,
    S.City
FROM
    students AS S INNER JOIN coures AS C
ON
    S.Roll = C.Roll;    

//left join
SELECT
    S.Roll,
    Reg,
    Name,
    Cours_Name,
    GPA,
    S.City
FROM
    students AS S LEFT JOIN coures AS C
ON
    S.Roll = C.Roll;

//right join    
SELECT
    S.Roll,
    Reg,
    Name,
    Cours_Name,
    GPA,
    S.City
FROM
    students AS S RIGHT JOIN coures AS C
ON
    S.Roll = C.Roll;

// UNION, UNION ALL in SQL
SELECT
    Roll,
    NAME,
    Gander
FROM khulna_tour

UNION

SELECT
    Roll,
    NAME,
    Gander
FROM dhaka_tour;  

//union All
SELECT
    Roll,
    NAME,
    Gander
FROM khulna_tour

UNION ALL

SELECT
    Roll,
    NAME,
    Gander
FROM dhaka_tour;

// VIEW in SQL (part-1)
CREATE VIEW student_view AS
SELECT Roll,Name,City
FROM students;

//view update
UPDATE student_view
SET Name='Kaku'
WHERE Roll=110;

//view insert
INSERT INTO student_view(Roll,Name,City)
VALUES
(113,'Baba','Frage');

//Delete view
DELETE FROM student_view
WHERE Roll=113;

//Drop view
DROP VIEW student_view;

// Date And Time in SQL
SELECT CURRENT_DATE();
SELECT CURRENT_TIME();
SELECT NOW();//Date + Time
SELECT ADDDATE('2023-03-05',INTERVAL 5 DAY);//add 5 day
SELECT SUBDATE('2023-03-15',INTERVAL 5 DAY);//Remove 5 day
SELECT MAKEDATE(2023,312);

SELECT DAYNAME('2023-03-05');
SELECT MONTHNAME('2023-03-05');