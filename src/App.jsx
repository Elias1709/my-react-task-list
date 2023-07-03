
import { useState, useEffect } from "react";
import { Header } from './components/Header';
import { TaskCard } from './components/TaskCard';

import { TaskList } from "./components/TaskList";
import { ShowControl } from "./components/ShowControl";
import { TaskRow } from "./components/TaskRow";
import { EditTask } from "./components/EditTask";

function App() {

  const[taskItems, setTaskItems]= useState([ ]);
  const [showCompleted, setShowCompleted]= useState(false)

  function addNewTask (taskName) {
    
    if (!taskItems.find(task => task.name === taskName)){
      setTaskItems([...taskItems, {name:taskName, done:false}])
    }
  }

  const toggleTask = task => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name)  ? {...t, done: !t.done}: t))
  }

  const editTask = () =>{
    setTaskItems(
      taskItems(taskItems.find(task.name) )
    )
  }

  useEffect(() => {
    let  data = localStorage.getItem('tasks')
    if(data){
      setTaskItems(JSON.parse(data))
    }
  }, []);

  const deleteTask =()=> {
    setTaskItems (taskItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(()=> {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container p-4 col-md-4 offset-md-4">  
        <Header/>
          
        <TaskCard addNewTask={addNewTask}/> <br />
        <TaskList tasks={taskItems} toggleTask={toggleTask} />
        <ShowControl isChecked={showCompleted}
        setShowCompleted={(checked)=>setShowCompleted(checked)}
        deleteTask={deleteTask}/>      
        {
          showCompleted === true && (
            <TaskList tasks={taskItems} toggleTask={toggleTask} showCompleted ={showCompleted}/>
          )
        }
        <EditTask editTask={EditTask}/>
        
      </div>             
      
    </main>
  )
}

export default App
