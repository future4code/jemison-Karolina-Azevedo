/*Aprofundamento SQL*/

/*1-
a- Apaga a coluna salary
b- Altera o nome da coluna gender para sex
c- Altera o número máximo de caracteres dos valores da coluna gender
d- ALTER TABLE Actor CHANGE gender gender VARCHAR(100);*/

/*2-*/

UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

/*3-*/
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
    
SET SQL_SAFE_UPDATES = 0;

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
    
/*4-*/

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

/*5-*/
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
/*a- O resultado mostra a quantidade de elementos de cada tipo do campo gender*/

/*b-*/

/*c-*/
SELECT * FROM Actor
ORDER BY salary;

/*d-*/
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

/*e-*/
SELECT AVG(salary), gender 
FROM Actor
GROUP BY gender;

/*6-*/
ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE rating 
avaliação FLOAT;

UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"
    

