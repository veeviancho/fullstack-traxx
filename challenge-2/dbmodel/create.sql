create table user
( id INT not null auto_increment primary key,
  username VARCHAR(255) not null,
  password VARCHAR(255) not null
);

create table currency
( id INT not null auto_increment primary key,
  base VARCHAR(45) not null,
  counter VARCHAR(45) not null,
  rate FLOAT not null
);