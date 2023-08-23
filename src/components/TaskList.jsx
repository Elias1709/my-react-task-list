// TaskList.js
import React, { useState } from 'react';
import useTaskList from '../hooks/useTaskList';

export const TaskList = () => {
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [validationError, setValidationError] = useState(null);
  const { tasks, addTask, updateTask, removeTask, toggleTaskComplete } = useTaskList();
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const handleAddTask = () => {
    if (newTask.trim().length < 3) {
      alert('El nombre de la tarea debe tener al menos 3 caracteres.');
      return;
    }
    addTask({ text: newTask, description: newDescription, completed: false });
      setNewTask('');
      setNewDescription('');
      setValidationError(null);
  };


  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index].text);
    setEditedDescription(tasks[index].description);
  };

  const handleUpdateTask = () => {
    if (editedTask.trim().length < 3) {
      alert('El nombre de la tarea debe contener al menos 3 caracteres.');
      return;
    }
    updateTask(editIndex, { text: editedTask, description: editedDescription, completed: tasks[editIndex].completed });
    setEditIndex(null);
    setEditedTask('');
    setEditedDescription('');
  
  };

  const handleRemoveTask = (index) => {
    removeTask(index);
  };

  const handleToggleTaskComplete = (index) => {
    toggleTaskComplete(index);
  };

  
    return (
        <div className="container text-center">
          <h1>Lista de Tareas</h1>
          <div className="mb-3">
        <form>
          <div className="mb-3">
            <label htmlFor="taskName" className="form-label">
              Nombre de la Tarea
            </label>
            <input
              type="text"
              className="form-control"
              id="taskName"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="taskDescription" className="form-label">
                Descripción de la Tarea (opcional)
            </label>
            <textarea
              className="form-control"
              id="taskDescription"
              rows="3"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            ></textarea>
          </div>
          {validationError && (
            <div className="alert alert-danger mt-3" role="alert">
              {validationError}
            </div>
          )}
          <div className="mb-3 ">
            <input type="text" value={newTask} onChange={(e) =>
                setNewTask(e.target.value)} placeholder="Agregue una tarea"/>
                <button className="btn btn-primary" onClick={handleAddTask}>
                    Agregar
                </button>
                
            </div>
            </form>
          <table className="table table-striped table-bordered ">
            <thead>
              <tr className="table table-primary">
                <th>Tarea</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                    <td>
                        <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" checked={task.completed}
                                onChange={() => handleToggleTaskComplete(index)}  />
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                        </label>
                    </td>
                    <td>
                        {editIndex === index ? (
                      <>
                        <input
                          type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)}/>
                        <button className="btn btn-warning" onClick={handleUpdateTask}>
                          Guardar
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="btn btn-secondary btn btn-warning" onClick={() => handleEditTask(index)}>
                          Editar
                        </button>
                        <button className="btn btn-secondary btn btn-danger" onClick={() => handleRemoveTask(index)}>
                          Eliminar
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
  );
};

//export default TaskList;
