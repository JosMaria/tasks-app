import { useState, useEffect } from 'react';
import { tasks as data } from './tasks';

console.log(data);

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, [])

  if (tasks.length === 0) {
    return <h1>No hay tareas  </h1>
  }

  return (
    <div>
      {
        tasks.map(task => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>))
      }
    </div>
  )
}
