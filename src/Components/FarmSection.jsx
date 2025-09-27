import '../Styling/FarmSection.css';

const FarmSection = () => {
  const farmData = {
    name: 'Ramesh',
    crop: 'Rice',
    area: '10 acres',
    location: 'Wayanad, Kerala',
    soilType: 'Black Cotton Soil',
    irrigation: 'Drip System',
    lastHarvest: '15 Oct 2024',
    nextHarvest: '15 Mar 2025'
  };

  const cropStats = [
    { label: 'Growth Stage', value: 'Vegetative'},
    { label: 'Health', value: 'Excellent'},
    { label: 'Pest Risk', value: 'Low' },
    { label: 'Water Need', value: 'Moderate'}
  ];

  return (
    <section className="farm-section">

      {/* Farmer Info */}
      <div className="farmer-info">
        <h3>Farmer Details</h3>
        <div className="info-row"><span>Farmer Name:</span><strong>{farmData.name}</strong></div>
        <div className="info-row"><span>Current Crop:</span><strong>{farmData.crop}</strong></div>
        <div className="info-row"><span>Area:</span><strong>{farmData.area}</strong></div>
        <div className="info-row"><span>Location:</span><strong>{farmData.location}</strong></div>
        <div className="info-row"><span>Soil Type:</span><strong>{farmData.soilType}</strong></div>
        <div className="info-row"><span>Irrigation:</span><strong>{farmData.irrigation}</strong></div>
        <div className="info-row"><span>Last Harvest:</span><strong>{farmData.lastHarvest}</strong></div>
        <div className="info-row"><span>Next Harvest:</span><strong>{farmData.nextHarvest}</strong></div>
      </div>

      {/* Crop Stats */}
      <div className="crop-stats">
        <h3>Crop Statistics</h3>
        <div className="stats-row">
          {cropStats.map((stat, idx) => (
            <div className="stat-item" key={idx} >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-text">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="farm-actions">
        <button className="action-btn primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bar-chart" viewBox="0 0 16 16">
            <path d="M0 0h1v15h15v1H0V0z"/>
            <path d="M2 10h2v5H2v-5zm3-4h2v9H5V6zm3-2h2v11H8V4zm3-2h2v13h-2V2z"/>
          </svg>
          View Report
        </button>
        <button className="action-btn secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-droplet" viewBox="0 0 16 16">
            <path d="M8 0s-5 5-5 8a5 5 0 1 0 10 0c0-3-5-8-5-8z"/>
          </svg>
          Manage Irrigation
        </button>
        <button className="action-btn secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bug" viewBox="0 0 16 16">
            <path d="M4.355 1.97l-.85 1.52a.5.5 0 0 0 .866.5l.85-1.52a.5.5 0 0 0-.866-.5zm7.29 0a.5.5 0 1 0-.866.5l.85 1.52a.5.5 0 1 0 .866-.5l-.85-1.52zM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
          </svg>
          Pest Control
        </button>
        <button className="action-btn secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-journal-text" viewBox="0 0 16 16">
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
            <path d="M5 4h6v1H5V4zm0 2h6v1H5V6zm0 2h6v1H5V8z"/>
          </svg>
          Add Notes
        </button>
      </div>

    </section>
  );
};

export default FarmSection;
