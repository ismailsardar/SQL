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