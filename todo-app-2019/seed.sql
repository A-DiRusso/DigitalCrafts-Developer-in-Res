INSERT INTO users
  (displayname, username)
VALUES
  ('Alice', '3l33t4x04'),
  ('Bob', 'puppy_lover')
;

select * from users;

INSERT INTO tasks 
  (priority, task, user_id)
VALUES
  (10, 'go to work', 1),
  (3, 'worship the cat', 1),
  (2, 'pet the cat', 1),
  (1, 'feed the cat', 1),
  (3, 'worship the dog', 2),
  (2, 'pet the dog', 2),
  (1, 'feed the dog', 2);

select * from tasks;