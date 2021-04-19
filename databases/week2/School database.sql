-- Part 2: School database

-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).


create database School;
use School;

CREATE table Class (
id int unsigned primary key auto_increment ,
name varchar(150),
begins date,
ends date
);

CREATE table Student(
id int unsigned primary key auto_increment,
name varchar(150),
email varchar(150),
phone varchar(50),
class_id int unsigned,
foreign key (class_id) references Class(id)
);

CREATE INDEX name
ON Student (name);

ALTER TABLE Class
ADD status enum('not-started','ongoing','finished');