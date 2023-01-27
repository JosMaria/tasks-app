import { TaskContext } from '../context/TaskContext'
import { useContext} from 'react';

export const TaskCard = ({ task, deleteTask }) => {
  const valueContext = useContext(TaskContext);
  console.log(valueContext);
  
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  )
}
