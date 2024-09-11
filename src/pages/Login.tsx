import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/utils/AuthContext';

const { VITE_APP_API_URL } = import.meta.env;

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    let response: Response;
    try {
      response = await fetch(`${VITE_APP_API_URL}/api/v1/login`, {
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
        setError(null);
        navigate('/support-cases/new');
      } else {
        setError('Login failed. Please check your username and password.');
      }
    } catch (error) {
      setError('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className='Login Card'>
      {error && <div className='Login__error'>{error}</div>}
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