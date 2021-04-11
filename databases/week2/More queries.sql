-- Part 3: More queries

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title, user.name, user.email
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.email like "%@spotify.com";


-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title, user.name, status.name
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck' AND status.name='Not started';


-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.title, user.name, task.created
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows' AND month(created)= 9;


-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT month(created) AS Month, count(task.id) AS Created_Tasks
FROM task
group by Month
order by Month;

-- or

SELECT EXTRACT(month FROM task.created) AS Month, count(task.id) AS Created_Tasks
FROM task
group by Month
order by Month;

