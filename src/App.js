import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('Mitjana'); // valor por defecto

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      priority: priority,
    };

    setTasks([...tasks, task]);
    setNewTask('');
    setPriority('Mitjana'); // reiniciar prioridad
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Ordenar tareas por prioridad: Alta > Mitjana > Baixa
  const priorityOrder = { Alta: 1, Mitjana: 2, Baixa: 3 };
  const sortedTasks = [...tasks].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  return (
    <div className="app-container">
      <div className="todo-container">
        <h1>La Meva Llista de Tasques</h1>
        <form onSubmit={handleAddTask} className="task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Afegeix una nova tasca..."
          />
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Alta">Alta</option>
            <option value="Mitjana">Mitjana</option>
            <option value="Baixa">Baixa</option>
          </select>
          <button type="submit">Afegir</button>
        </form>
        <ul className="task-list">
          {sortedTasks.map((task) => (
            <li
              key={task.id}
              className={`${task.completed ? 'completed' : ''} priority-${task.priority.toLowerCase()}`}
            >
              <span onClick={() => handleToggleComplete(task.id)}>
                {task.text} <strong>({task.priority})</strong>
              </span>
              <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
