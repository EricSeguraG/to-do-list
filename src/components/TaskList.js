import React from 'react';
import TaskItem from './TaskItem'; // Importem el component individual

// Rep la llista de tasques i les funcions per 'props'
const TaskList = ({ tasks, onToggleComplete, onDeleteTask, onUpdateTaskDate }) => { // Rep la nova prop
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task} // Passem l'objecte tasca
          onToggleComplete={onToggleComplete} // Passem la funció
          onDeleteTask={onDeleteTask} // Passem la funció
          onUpdateTaskDate={onUpdateTaskDate} // Passa la nova prop a TaskItem
        />
      ))}
    </ul>
  );
};

export default TaskList;