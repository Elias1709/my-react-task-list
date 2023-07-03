import { useState } from "react";

export const TaskCard =({addNewTask})=>{

    const [newTaskName, setNewTaskName] = useState('')
    
    const handleSubmit =(e)=>{
    e.preventDefault();
    addNewTask(newTaskName),
    
    setNewTaskName('')
  }

  return (

        <form onSubmit={handleSubmit} className="my-2 row">
        
            <div className="col-9">
                <input type="text" className='form-control' placeholder="Agregue una tarea"
                value={newTaskName}
                onChange={(e)=>setNewTaskName(e.target.value)}/> 
            </div>
            <div className="col-3">
                <button className="btn btn-primary"> Agregar</button> <br />
            </div>        
            
        </form>
    )
}

