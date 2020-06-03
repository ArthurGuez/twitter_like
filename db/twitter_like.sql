CREATE DATABASE twitter_like;

USE twitter_like;

CREATE TABLE users (
id INT(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
username VARCHAR(100),
prenom VARCHAR(100),
email VARCHAR(200),
date_de_naissance DATE,
sexe VARCHAR(100),
ville VARCHAR(100),
password VARCHAR (100)
);

CREATE TABLE tweets (
id INT (11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id_tweet),
content VARCHAR(280),
hashtag VARCHAR (100),
date DATETIME,
id_utilisateur INT,
FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur (id_utilisateur)) ENGINE INNODB;

CREATE TABLE Liker (
id INT (11) AUTO_INCREMENT,
PRIMARY KEY (id_liker),
id_tweets INT,
id_utilisateur INT,
FOREIGN KEY (id_tweets) REFERENCES tweets (id_tweet),
FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur (id_utilisateur)) ENGINE INNODB;


DESCRIBE Utilisateur;