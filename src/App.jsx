import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { useState, useEffect } from 'react';
import { tasks as data } from './data/tasks';

export const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, [])

  const createTask = task => setTasks([...tasks, 
      {
        id: tasks.length + 1,
        title: task.title,
        description: task.description 
      }
    ]
  );

  const deleteTask = taskId => setTasks(tasks.filter(task => task.id !== taskId));

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}
