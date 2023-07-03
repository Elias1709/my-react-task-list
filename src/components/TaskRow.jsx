import { useState } from "react";

export const TaskRow =({task, toggleTask, editTask})=> {
    const [editText, setEditText] = useState('');
     const handleEdit =()=>{
        let taskName = task.name
        editTask = taskName;

        alert('Tarea editada | ' + editTask) 

    }; 
    return (
        <tr className="d-flex justify-content-between">
            <td >
                <input type="checkbox" checked={task.done}
                onChange={()=> toggleTask(task)} /> 
                {task.name}                
           </td>
           <td >
                <button className="btn btn-secondary btn btn-warning" 
                    onClick={handleEdit}>
                        Editar
                </button>
           </td> 
        </tr>
    )
}