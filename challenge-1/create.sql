create table users
( userId int unsigned not null auto_increment primary key,
  fName char(100) not null,
  lName char(100) not null,
  code char(10),
  contact char(100) not null,
  email char(100) not null,
  websiteURL char(100)
);