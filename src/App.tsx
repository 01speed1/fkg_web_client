import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SupportRequest from './pages/SupportRequest';
import PrivateRoute from './components/PrivateRoute';
import LogoutButton from './components/LogoutButton';
import ListButton from './components/ListButton';

import SupportRequestList from './pages/SupportRequestList';
import SupportCaseDetails from './pages/SupportCaseDetails.tsx'; 

import { useAuth } from './components/utils/AuthContext';

import './App.css';

const App: React.FC = () => {

  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support-cases/new" element={<PrivateRoute element={<SupportRequest />} />} />
        <Route path="/support-cases/list" element={<PrivateRoute element={<SupportRequestList />} />} />
        <Route path="/support-cases/:id" element={<PrivateRoute element={<SupportCaseDetails />} />} /> {/* Nueva ruta */}
      </Routes>
      {isAuthenticated && (
        <>
          <ListButton />
          <LogoutButton />
        </>
      )}
    </Router>
  );
};



export default App;
