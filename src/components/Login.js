// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic authentication (static as of now)
    if (userId === 'User' && password === 'Password') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <center>
      <h2>Login</h2>
      <label>User ID:</label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <br /><br/>
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br /><br/>
      <button onClick={handleLogin}>Login</button>
      </center>
    </div>
  );
};

export default Login;
