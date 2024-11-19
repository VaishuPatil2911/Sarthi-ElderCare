import React, { useState } from 'react';
import '../styles/Login.css';  // Adjust the path accordingly

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., authentication API call)
    console.log("Login submitted:", { email, password });
  };

  return (
    <div className="login-container2">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        <p className="switch-form">
          New here? <a href="/register">Register Your Elder's</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
