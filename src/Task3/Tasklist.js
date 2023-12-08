// TaskList.js

import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onToggle }) => {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskList;
