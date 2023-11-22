import React, { useState } from 'react';
import Login from './components/Login';
import Users from './components/Users';
import TaskLists from './components/TaskLists';
import Tasks from './components/Tasks';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Users');

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const renderMenu = () => {
    switch (activeMenu) {
      case 'Users':
        return <Users />;
      case 'Task Lists':
        return <TaskLists />;
      case 'Tasks':
        return <Tasks />;
      default:
        return null;
    }
  };

  return (
   <div>
      <header>
        <h1>Task:7 - Back Office Panel</h1>
      </header>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <nav>
            <ul>
              <li onClick={() => setActiveMenu('Users')}>Users</li>
              <li onClick={() => setActiveMenu('Task Lists')}>Task Lists</li>
              <li onClick={() => setActiveMenu('Tasks')}>Tasks</li>
            </ul>
          </nav>
          <main>
            {renderMenu()}
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
