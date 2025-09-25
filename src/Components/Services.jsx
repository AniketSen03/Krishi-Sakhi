import React from "react";
import "../Styling/Services.css";

export default function Services() {
  const services = [
    { id: "01", name: "Activity Tracking", img: "/8.jpg" },
    { id: "02", name: "Krishi Store", img: "/9.jpg" },
    { id: "03", name: "Past Records", img: "/3.jpg" },
    { id: "04", name: "Weather", img: "/12.jpg" },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.img} alt={service.name} className="service-img" />
            <div className="service-overlay">
              <p className="service-id">{service.id}</p>
              <h3 className="service-name">{service.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
