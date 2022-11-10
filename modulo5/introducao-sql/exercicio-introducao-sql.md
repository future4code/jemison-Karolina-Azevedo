CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

/*a-
VARCHAR(n) - String com no máximo N caracteres
DATE - Representa data (YYYY-MM-DD)
PRIMARY KEY - Chave primária (chave única na tabela)
CREATE TABLE - Criar tabela

b-SHOW DATABASES - mostra informação do nome do schema 
SHOW TABLES - mostra informação do nome da tabela

c-DESCRIBE Actor - descrição da tabela Actor
*/
/*2-*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
/*a-*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
/*b-*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Marieta Severo",
  700000,
  "1952-04-13", 
  "female"
);
/*O campo ID não é único e se repete neste caso*/
/*c-*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
/*Para funcionar, a quantidade de campos deve ser igual a quantidade de valores inseridos na tabela*/
/*d-*/ 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Francisco Cuoco",
  400000,
  "1949-04-18", 
  "male"
);
/*O campo name e seu valor estava faltando*/
/*e-*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
/*O tipo definido de cada campo deve ser seguido nos seus valores*/
/*f-*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Marcelo Antony",
  3200000,
  "1970-012-03", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Cláudia Raia",
  5000000,
  "1967-09-19", 
  "female"
);
/*3-*/

SELECT * FROM Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT * FROM Actor WHERE gender = "invalid";
/*Não retornou nenhum, pois não há nenhum valor inválido nessa tabela*/

SELECT * FROM Actor WHERE salary < 500000;

SELECT id, name from Actor WHERE id = "002";
/*O nome do campo name estava incorreto*/

/*4-*/
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

/*a- A query acima busca atores com iniciais A ou J e com salário acima de 300000*/

SELECT * FROM Actor
WHERE name != "A%" AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  
  /*5-*/
  
CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se eu fosse vocÊ",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e seus dois maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
/*6-*/
SELECT id, title, rating from Movie WHERE id = "002";

SELECT * from Movie WHERE title = "Deus é Brasileiro";

SELECT id, title, synopsis from Movie WHERE rating > 7;

/*7-*/
SELECT * FROM Movie
WHERE title LIKE "%vida%";

SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";
      
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04";

SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
