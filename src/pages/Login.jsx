import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      //Send login request to backend
      const response = await fetch('/api/login',{
        method: 'POST',
        body: JSON.stringify({username, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        //Set IsLoggedIn state to true on succcessful login
        setIsLoggedIn(true);
      }
    };

    if (isLoggedIn) {
      //Redirect to dashboard if isLoggedIn is true

      return <Navigate to="/header" />;
    }

  return (
    <div>
      <h2>Wel Come to LoginPage</h2>
      <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
