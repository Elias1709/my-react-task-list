// TaskList.js
import React, { useState } from 'react';
import useTaskList from '../hooks/useTaskList';

export const TaskList = () => {
  const [newTask, setNewTask] = useState('');
  const { tasks, addTask, updateTask, removeTask, toggleTaskComplete } = useTaskList();
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask({ text: newTask, completed: false });
      setNewTask('');
    }
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index].text);
  };

  const handleUpdateTask = () => {
    if (editedTask.trim() !== '') {
      updateTask(editIndex, { text: editedTask, completed: tasks[editIndex].completed });
      setEditIndex(null);
      setEditedTask('');
    }
  };

  const handleRemoveTask = (index) => {
    removeTask(index);
  };

  const handleToggleTaskComplete = (index) => {
    toggleTaskComplete(index);
  };

  
    return (
        <div>
          <h1>Lista de Tareas</h1>
          <div className="mb-3 ">
            <input type="text" value={newTask} onChange={(e) =>
                setNewTask(e.target.value)} placeholder="Agregue una tarea"/>
                <button className="btn btn-primary" onClick={handleAddTask}>
                    Agregar
                </button>
            </div>
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
  );
};

//export default TaskList;
