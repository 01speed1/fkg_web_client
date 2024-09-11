import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/support-cases/list');
  };

  return (
    <button onClick={handleClick} style={{ position: 'absolute', top: 10, right: 110 }}>
      Support Cases
    </button>
  );
};

export default ListButton;