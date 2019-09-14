create table users (
  id serial  PRIMARY key,
  displayname VARCHAR(100),
  username VARCHAR(100)
);

create table tasks (
  id serial PRIMARY key,
  priority integer,
  task VARCHAR(100),
  status boolean DEFAULT false,
  user_id integer REFERENCES users(id)
);
