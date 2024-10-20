// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './LoginCard.css'; // Ensure to create this CSS file for styling

const LoginCard = () => {
  const [activeRole, setActiveRole] = useState('college');
  const [showForm, setShowForm] = useState(false);

  const handleToggle = (role) => {
    setActiveRole(role);
    setShowForm(true); // Show the form when any button is clicked
  };

  return (
    <div className='card'>
      <div className="container">
        <div className="toggle-buttons">
          <button
            className={`toggle-button ${activeRole === 'college' ? 'active' : ''}`}
            onClick={() => handleToggle('college')}
          >
            College
          </button>
          <button
            className={`toggle-button ${activeRole === 'alumni' ? 'active' : ''}`}
            onClick={() => handleToggle('alumni')}
          >
            Alumni
          </button>
          <button
            className={`toggle-button ${activeRole === 'student' ? 'active' : ''}`}
            onClick={() => handleToggle('student')}
          >
            Student
          </button>
        </div>
        {showForm && (
          <form className={`login-form ${showForm ? 'show' : ''}`} id="login-form">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginCard;
