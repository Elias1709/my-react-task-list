
import './App.css'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import {CgAddR} from 'react-icons/cg'

function App() {

  return (
    <div className='App'>
      <Header/> <br />

      <div className='counter-task'>
        <h4>Nº Tareas: 4</h4> 
        <h4>Pendientes: 3</h4>
      </div> <br />
      <div>
        <input type="text" className='AddTask' placeholder="Agregue una tarea" /> <button className='btn-add' > <CgAddR/></button> <br />
      </div>

      <div>
        <TaskList />
      
      </div> 
      
    </div>
  )
}

export default App
