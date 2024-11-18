import React, { useState } from 'react';
import './SignUpLoginPage.css'

const SignUpLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic
    console.log('Logged in');
  };

  return (
    <div className="sign-up-login">
      <h1>Sign Up / Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignUpLoginPage;
