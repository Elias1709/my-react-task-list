export const ShowControl =({isChecked, setShowCompleted, deleteTask}) => {
    const handleDelete =()=>{
        if(window.confirm("Seguro que quieres eliminar?")){
            deleteTask()
        }
    };
    return(
        <div className="d-flex justify-content-between bg-secondary text-white 
        text-center p-2 border-secondary">
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" 
                checked={isChecked}
                onChange={(e)=> setShowCompleted(e.target.checked)} 
                /> {" "}
                <label>Mostrar tareas completadas</label>
            </div>
            <button onClick={handleDelete} className="btn btn-danger btn-sm">
                Eliminar
            </button>
        </div> 
    );
} 