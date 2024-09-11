import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/utils/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: username,
        password: password,
        grant_type: 'password',
      }).toString(),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('token_type', data.token_type);
      login();
      navigate('/support-cases/new');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div className='Login Card'>
      <h2 className='Login__title'>Login</h2>
      <form className='Login__formLogin' onSubmit={handleSubmit}>
        <div className='FormLogin__input'>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='FormLogin__input'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='FormLogin__submit' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;