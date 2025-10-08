import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Comprar pa', completed: false, dueDate: null }, // Afegim dueDate
    { id: 2, text: 'Acabar informe', completed: true, dueDate: new Date().toISOString() },
  ]);

  // Afegir nova tasca amb dueDate: null
  const handleAddTask = (text) => {
    const task = {
      id: Date.now(),
      text: text,
      completed: false,
      dueDate: null, // Nou camp
    };
    setTasks([...tasks, task]);
  };

  // Actualitzar només la data
  const handleUpdateTaskDate = (taskId, newDate) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, dueDate: newDate ? newDate.toISOString() : null }
          : task
      )
    );
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

  return (
    <div className="app-container">
      <div className="todo-container">
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
          onUpdateTaskDate={handleUpdateTaskDate}
        />
      </div>
    </div>
  );
}

export default App;