// src/components/Sidebar.js
import React from 'react';
import '../Styling/Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const notifications = [
    { id: 1, title: 'Heavy Rain Alert', time: 'Just now', urgent: true },
    { id: 2, title: 'Complete Your Profile', time: '59 minutes ago', urgent: false },
    { id: 3, title: 'Crop Disease Report', time: '12 hours ago', urgent: false }
  ];

  const activities = [
    { id: 1, title: 'Irrigation', time: 'Just now' },
    { id: 2, title: 'Sowing', time: '59 minutes ago' },
    { id: 3, title: 'Post Issues', time: '12 hours ago' }
  ];

  const mainFeatures = [
    'Overview', 'Settings', 'Krishi Store', 'Account', 'Personalized Advisory',
    'Remainders & Alerts', 'News & Updates', 'Schemes', 'Support'
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Krishi Sakhi</h2>
      </div>
      
      <div className="user-section">
        <div className="user-info">
          <div className="user-avatar"></div>
          <span>User</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <div className="nav-item active">
            <span>Dashboards</span>
          </div>
          <div className="nav-item">
            <span>Search</span>
          </div>
        </div>

        <div className="nav-section">
          <h4>Notifications</h4>
          {notifications.map(notification => (
            <div key={notification.id} className={`notification-item ${notification.urgent ? 'urgent' : ''}`}>
              <span className="notification-title">{notification.title}</span>
              <span className="notification-time">{notification.time}</span>
            </div>
          ))}
        </div>

        <div className="nav-section">
          <h4>Activities</h4>
          {activities.map(activity => (
            <div key={activity.id} className="activity-item">
              <span className="activity-title">{activity.title}</span>
              <span className="activity-time">{activity.time}</span>
            </div>
          ))}
        </div>

        <div className="nav-section">
          <h4>Main Features</h4>
          {mainFeatures.map((item, index) => (
            <div 
              key={index} 
              className={`nav-item ${item.toLowerCase() === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(item.toLowerCase())}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;