import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SupportRequest from './pages/SupportRequest'; // Importar el nuevo componente
import PrivateRoute from './components/PrivateRoute'; // Importar el nuevo componente
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support-request" element={<PrivateRoute element={<SupportRequest />} />} />
      </Routes>
    </Router>
  );

}

export default App;
