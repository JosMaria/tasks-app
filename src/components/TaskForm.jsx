import { useState } from 'react';

export const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder='Escribe tu tarea' 
        onChange={e => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea 
        placeholder='Escribe la description de la tarea'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      >
      </textarea>
      <button>Guardar</button>
    </form>
  )
}
