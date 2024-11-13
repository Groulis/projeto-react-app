// Import necessary dependencies
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18 compatibility
import './App.css';

// Main App Component
function App() {
  // State for holding input and task list
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to handle task submission
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className="app-container">
      <h1>Simple React To-Do App</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Create root for React 18 and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
