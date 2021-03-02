DROP DATABASE IF EXISTS favourite_db;
-- Creates the "favorite_db" database --
create database favourite_db;
use favourite_db;
CREATE TABLE favorite_foods (
food VARCHAR (50) NOT NULL,
score INTEGER (20)
);
create table favorite_songs(
song varchar(100) not null,
artist varchar(50),
score integer(10)
); 
create table favourite_movies(
id integer(10) not null auto_increment,
movie varchar(5) not null,
five_times boolean default false,
score integer(10),
primary key(id)
);





