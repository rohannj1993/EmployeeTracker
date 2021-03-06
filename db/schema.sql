DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
  id INTEGER PRIMARY KEY auto_increment,
  name VARCHAR(30)
 
);

CREATE TABLE role (
  id INT PRIMARY KEY  auto_increment,
  title VARCHAR(30),
  salary TEXT,
  department_id INT 
);

CREATE TABLE employee(
  id INT PRIMARY KEY  auto_increment,
  first_name VARCHAR(30) ,
  last_name VARCHAR(30) ,
  role_id INT,
  manager_id INT 
)