
-- 1.Find out how many tasks are in the task table
SELECT count(id) AS TotalTasks
FROM task;

-- 2.Find out how many tasks in the task table do not have a valid due date
SELECT count(id) AS TotalTasks
FROM task
WHERE task.due_date is NULL;

-- 3.Find all the tasks that are marked as done
SELECT task.id, task.title, status.name As status
FROM task 
JOIN status ON task.status_id = status.id
WHERE status.name = "Done";

-- 4.Find all the tasks that are not marked as done
SELECT task.id, task.title, status.name As status
FROM task 
JOIN status ON task.status_id = status.id
WHERE status.name != "Done";

-- 5. Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
order by created desc;

-- 6. Get the single most recently created task
SELECT *
 FROM task 
 ORDER BY created DESC 
 limit 1;
 
 -- 7. Get the title and due date of all tasks where the title or description contains database
 SELECT title, due_date
 FROM task
 WHERE title LIKE "%database%"
 or description LIKE "%database%";
 
 -- 8. Get the title and status (as text) of all tasks
 SELECT task.title , status.name AS Status
 from task
 join status ON status_id = task.status_id;
 
 -- 9. Get the name of each status, along with a count of how many tasks have that status
 SELECT status.name AS status, count(task.status_id) AS "Number of Tasks"
 FROM status
 join task On task.status_id = status.id
 group by status.name;
 
 
 -- 10. Get the names of all statuses, sorted by the status with most tasks first
 SELECT status.name, count(task.status_id) AS "Number of Tasks"
 FROM status
 join task ON task.status_id = status.id
 group by status.name
 order by count(task.status_id) desc;
 
 
 
 
 
 























