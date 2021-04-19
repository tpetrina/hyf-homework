-- Part 1: Working with tasks

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
values ( "Doing Home Work", "make prepration for the DB class and do the exercises and home work", "2021-04-05", "2021-04-06", "2021-04-07", 2, 4);

-- Change the title of a task
UPDATE task
SET title = "Doing class prepration"
WHERE id=37;

-- Change a task due date
UPDATE task
SET due_date = "2021-04-08"
WHERE id=37;

-- Change a task status
UPDATE task
SET status_id = 1
WHERE id=37;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id=37;

-- Delete a task
DELETE from task
WHERE id=37;