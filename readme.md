Entity Explanation
•	The three entities I have created are School, Teacher, and Course.
•	School contains an ID column which unique identifies each school using an integer, it also has a school name (string) attribute. 
    o	School has a one to many relationship with the entity Teacher and a one to many relationship with the entity Course
•	Teacher also contains an ID column which uniquely identifies each Professor, there is also a Name (string), and a subject (string) column.	
    o	Teachers has a many to one relationship with the entity School and a many to many entity relationship with Course.
•	Course also contains an ID column that uniquely identifies each course from one another. Course also contains a name (string), number (int) which identifies the class number, Teacher (string), and school (string)
    o	Course has a many to one relationship with school and a many to many relationship with Teacher.


