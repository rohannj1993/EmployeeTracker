INSERT INTO department ( name)
VALUES 
  ( "Sales"),
  ("Accounting"),
  ("Custodial"),
  ("Marketing"),
  ( "Customer Service");

INSERT INTO role ( title,salary,department_id) 
VALUES
  ( 'sales','$50,000',1),
  ( 'junior accounting','$70,000',2),
  ( 'senior accounting','$100,000',2),
  ( 'senior custodian','$60,000',3),
  ( 'advertising assistant','$65,000',4),
  ( 'advertising manager','$105,000',4),
  ('customer service rep','$55,000',5),
  ( 'customer service  senior rep','$75,000',5);
 

INSERT INTO employee (first_name,last_name, role_id, manager_id)
VALUES
('Hank','Hill',1,null),
('Steve','Johnson',2,null),
('James','Wilson',3,null),
('Kakarot','Bardock',4,null),
('Raditz','Bardock',5,null),
('Homer','Simpson',6,null),
('Randy','Marsh',7,null),
('Peter','Griffin',8,null)