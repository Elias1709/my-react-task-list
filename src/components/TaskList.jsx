import { TaskRow } from "./TaskRow"

export const TaskList = ({tasks, toggleTask, showCompleted=false, editTask}) => {

    const taskListRows = (doneValue)=> {
        console.log(doneValue)
        return(
            tasks
            .filter(task=> task.done ===doneValue)
            .map(task => (
                <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
              ))
        )
    };
    return (
        <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr className="table table-primary">
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody >
            {
                taskListRows(showCompleted)            
            }
        </tbody>
        
      </table>
    )
}