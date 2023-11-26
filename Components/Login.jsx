// components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Validate the login credentials 
    if (email === 'shopis@gmail.com' && password === 'shopis') {
      // If credentials are valid, redirect to the Home page
      navigate('/home');
    } else {
      // Display an error message based on the validation result
      if (email !== 'shopis@gmail.com') {
        setError('The email address you’ve entered is incorrect');
      } else {
        setError('The password you’ve entered is incorrect');
      }
    }
  };

  return (
    <div>
      <img src="logo.png" alt="Product Logo" width="400" height="400" />
      <br />
      <br />
      <div className="input-container">
        <input
          className="email-input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <br />
        <input
          className="password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <br />
      <button onClick={handleLogin} className="login-button">Log in</button>
      {error && <div className="error-message">{error}</div>}
      <Link to="/forgot-password">Forgot your password?</Link>
      <br />
      <br />
      <Link to="/signup">New user? Click to sign up</Link>
    </div>
  );
}
