import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './utils/AuthContext';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    logout();
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} style={{ position: 'absolute', top: 10, right: 10 }}>
      Logout
    </button>
  );
};

export default LogoutButton;