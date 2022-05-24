import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function UserAccountBox({ icon, text, borderColor, route }) {
  const navigate = useNavigate();

  const routeHandler = (e) => {
    navigate(`/${route}`);
  };

  return (
    <div
      className="userAccountBoxWrapper"
      style={{ border: `2px solid ${borderColor}` }}
      onClick={routeHandler}
    >
      <div className="userAccountBoxFlex">
        {icon}
        <p style={{ fontSize: '25px' }}>{text}</p>
      </div>
    </div>
  );
}

export default UserAccountBox;
