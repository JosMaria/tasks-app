import { createContext } from 'react'

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  let valueOfContext = 'my value of context';
  
  return (
    <TaskContext.Provider value={valueOfContext}>
      {props.children}
    </TaskContext.Provider>
  )
}
