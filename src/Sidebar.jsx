import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false); // Close sidebar when clicking a link
  };

  return (
    <div>
      {/* Hamburger icon */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        &#9776;
      </div>

      {/* Sidebar content */}
      <div className={`sidebaar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="profile">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzBE_P3rPclK8gJnC-y1Mq7kNOvyL8yUHlg&s" alt="Profile" className="profile-pic" />
          <div className="profile-info">
            <h2 className="profile-name">John Doe</h2>
          </div>
        </div>
        <ul className="menu">
          <Link to="/Profile" onClick={closeSidebar} style={{ textDecoration: 'none', color: 'black' }}>
            <li className="menu-item">Profile</li>
          </Link>
          <Link to="/Course" onClick={closeSidebar} style={{ textDecoration: 'none', color: 'black' }}>
            <li className="menu-item">Course Management</li>
          </Link>
          <Link to='/Student' onClick={closeSidebar} style={{ textDecoration: 'none', color: 'black' }}>
            <li className="menu-item">Student Management</li>
          </Link>
          <li className="menu-item">Assignment & Exam</li>
        </ul>
        <button className="logout-button">Log Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
