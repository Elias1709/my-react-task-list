import {FaTrash} from 'react-icons/fa'
import {FaEdit} from 'react-icons/fa'
import {BiCheckbox} from 'react-icons/bi'

export const Task = (props) => {
    const {NameTask} = props;


    return (
        <li>
            <span text-decoration ="line-through" >
                <input  type="checkbox" id="check" className='cbox' /> 
            </span>
            
            {NameTask}
            <button className="btn-delete"><FaTrash/> </button>
            <button className="btn-edit"><FaEdit/> </button>
        </li>
    )
}