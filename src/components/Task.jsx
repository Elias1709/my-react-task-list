import {FaTrash} from 'react-icons/fa'
import {FaEdit} from 'react-icons/fa'
import {BiCheckbox} from 'react-icons/bi'

export const Task = (props) => {
    const {NameTask} = props;


    return (
        <li>
            <input  type="checkbox" id="check" className='cbox' /> 
                        
            {NameTask}
            <button className="btn-delete"><FaTrash/> </button>
            <button className="btn-edit"><FaEdit/> </button>
        </li>
    )
}