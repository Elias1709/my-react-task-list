import { Task } from "./Task"

export const TaskList = (props) => {
    
    return (
        <ul>
            <span >
                <p>
                <Task NameTask = " Aprender Json"  />
                </p>
            </span>
            
            <Task NameTask = " Aprender Python"  />
                        
            <Task NameTask = " Aprender React" />
            <Task NameTask = " Aprender PHP" />          

            
        </ul>
    )
}