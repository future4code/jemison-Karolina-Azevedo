-- Exercício Relações SQL

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
SELECT * from Rating;

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

SELECT * from Rating;
SELECT * from Movie;

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Médio!",
    6,
		"003"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"003",
    "Ruim!",
    3,
		"002"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"004",
    "Excelente!",
    10,
		"001"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"005",
    "Excelente!",
    8,
		"005"
);

-- 1.a) São as chaves que relacionam uma tabela com a outra.
-- c) erro 1452

ALTER TABLE  Movie DROP COLUMN  avaliação;

-- 2.

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"004",
    "001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"004",
    "003"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"002",
    "007"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"003",
    "001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"001",
    "005"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"001",
    "007"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
		"003",
    "002"
);

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- 3.a) Define em qual condição será dado o retorno

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
