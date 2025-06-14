import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthDropdown = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-dropdown">
      <button className="auth-btn">
        Login / Sign up
      </button>
      <div className="dropdown-content">
        <div className="dropdown-section">
          <strong>Doctor</strong>
          <button onClick={() => navigate('/login')} className="dropdown-link">Login</button>
          <button onClick={() => navigate('/signup')} className="dropdown-link">Sign up</button>
        </div>
        <div className="dropdown-section">
          <strong>Patients</strong>
          <button onClick={() => navigate('/login')} className="dropdown-link">Login</button>
          <button onClick={() => navigate('/signup')} className="dropdown-link">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default AuthDropdown;
