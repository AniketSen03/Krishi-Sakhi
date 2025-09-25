import "../Styling/NewsAndUpdates.css";
export default function NewsAndUpdates() {
  return (
    <div className="newsletter-section">
      <img src='/1.jpg' alt="Newsletter Background" className="newsletter-bg" />

      <div className="newsletter-content">
        <h2 className="newsletter-title">
          Latest Farming Updates & News
        </h2>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="newsletter-input"
          />
          <button className="newsletter-button">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
