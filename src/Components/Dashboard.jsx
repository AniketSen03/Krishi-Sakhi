// src/components/Dashboard.js
import React from 'react';
import '../Styling/Dashboard.css';

const Dashboard = () => {
  const growthData = [
    { month: 'Jan', thisYear: 12000, lastYear: 10000 },
    { month: 'Feb', thisYear: 18000, lastYear: 15000 },
    { month: 'Mar', thisYear: 22000, lastYear: 18000 },
    { month: 'Apr', thisYear: 25000, lastYear: 20000 },
    { month: 'May', thisYear: 28000, lastYear: 22000 },
    { month: 'Jun', thisYear: 30000, lastYear: 25000 },
    { month: 'Jul', thisYear: 32000, lastYear: 27000 },
  ];

  const cropsData = [
    { name: 'Coconut', percentage: 52.1, value: 52100 },
    { name: 'Rubber', percentage: 22.8, value: 22800 },
    { name: 'Rice(Paddy)', percentage: 13.9, value: 13900 },
    { name: 'Other', percentage: 11.2, value: 11200 }
  ];

  const activityData = [
    { month: 'Jan', value: 12000 },
    { month: 'Feb', value: 18000 },
    { month: 'Mar', value: 22000 },
    { month: 'Apr', value: 25000 },
    { month: 'May', value: 28000 },
    { month: 'Jun', value: 30000 },
    { month: 'Jul', value: 32000 },
    { month: 'Aug', value: 29000 },
    { month: 'Sep', value: 26000 },
    { month: 'Oct', value: 23000 },
    { month: 'Nov', value: 20000 },
    { month: 'Dec', value: 15000 }
  ];

  return (
    <div className="dashboard-content">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Market Revenue</h3>
          <div className="stat-value">7,265</div>
          <div className="stat-change positive">+1101%</div>
        </div>
        <div className="stat-card">
          <h3>Disease Detections</h3>
          <div className="stat-value">3,671</div>
          <div className="stat-change neutral">~0.03%</div>
        </div>
        <div className="stat-card">
          <h3>Crops Monitoring</h3>
          <div className="stat-value">156</div>
          <div className="stat-change positive">+15.03%</div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h3>Crops Growth Rate</h3>
          <div className="chart-legend">
            <span className="legend-item">
              <span className="legend-dot this-year"></span> This year
            </span>
            <span className="legend-item">
              <span className="legend-dot last-year"></span> Last year
            </span>
          </div>
          <div className="bar-chart">
            {growthData.map((data, index) => (
              <div key={index} className="bar-group">
                <div className="bars">
                  <div 
                    className="bar this-year-bar" 
                    style={{ height: `${(data.thisYear / 35000) * 100}%` }}
                  ></div>
                  <div 
                    className="bar last-year-bar" 
                    style={{ height: `${(data.lastYear / 35000) * 100}%` }}
                  ></div>
                </div>
                <span className="month-label">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-container">
          <h3>Main Plantation & Cash Crops</h3>
          <div className="crops-list">
            {cropsData.map((crop, index) => (
              <div key={index} className="crop-item">
                <span className="crop-name">{crop.name}</span>
                <span className="crop-percentage">{crop.percentage}%</span>
              </div>
            ))}
          </div>
          <div className="profit-chart">
            <h4>Calculate Profit & Track Expenses</h4>
            <div className="profit-bars">
              {cropsData.map((crop, index) => (
                <div key={index} className="profit-bar-container">
                  <div 
                    className="profit-bar" 
                    style={{ height: `${(crop.value / 60000) * 100}%` }}
                  ></div>
                  <span className="crop-label">{crop.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="activity-chart">
        <h3>Activity Tracking</h3>
        <div className="line-chart">
          {activityData.map((data, index) => (
            <div key={index} className="chart-point">
              <div className="point" style={{ bottom: `${(data.value / 35000) * 100}%` }}></div>
              <span className="point-month">{data.month}</span>
            </div>
          ))}
          <div className="chart-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;