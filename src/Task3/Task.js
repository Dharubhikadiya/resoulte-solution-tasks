// Task.js

import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="task">
      <input type="checkbox" checked={task.completed} onChange={() => {}} />
      <span>{task.title}</span>
    </div>
  );
};

export default Task;0
