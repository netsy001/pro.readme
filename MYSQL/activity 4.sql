DROP DATABASE IF EXISTS programming_db;
CREATE DATABASE programming_db;
USE programming_db;
CREATE TABLE programming_languages(
id integer(10) auto_increment not null,
languages VARCHAR(40),
rating NUMERIC(10),
mastered BOOLEAN DEFAULT TRUE,
primary key (id)
);
INSERT INTO programming_languages(languages, rating)
VALUES("english", 10);

select * from programming_languages;

