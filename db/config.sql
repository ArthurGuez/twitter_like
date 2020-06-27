CREATE DATABASE twitter_like;

USE twitter_like;

CREATE TABLE users (
id INT(11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
username VARCHAR(100),
email VARCHAR(200),
password VARCHAR (100)
);

CREATE TABLE tweets (
id INT (11) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id_tweet),
content VARCHAR(280),
date DATETIME,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users (id)) ENGINE INNODB;

CREATE TABLE follow (
follower_id INT,
followed_id INT,
FOREIGN KEY (follower_id) REFERENCES users (id),
FOREIGN KEY (followed_id) REFERENCES users (id)) ENGINE INNODB;