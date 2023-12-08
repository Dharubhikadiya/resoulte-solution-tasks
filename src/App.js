import logo from './logo.svg';
import './App.css';
import TaskList from './Task3/Tasklist';

function App() {

  const tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    // Add more tasks as needed
  ];
  
  return (
    <>
    <div className="app">
    <TaskList tasks={tasks} />
  </div>
    </>
  );
}

export default App;
