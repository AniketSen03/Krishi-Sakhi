import React from "react";
import "../Styling/Stats.css";

export default function Stats() {
  const stats = [
    { value: "50+", label: "Years Of Experience" },
    { value: "200+", label: "Fields In Progress" },
    { value: "120,000+", label: "Farmers Around Kerala" },
    { value: "$15 Million", label: "Agricultural Products" },
  ];

  return (
    <section className="stats-section">
      {stats.map((item, idx) => (
        <div className="stat-item" key={idx}>
          <h2 className="stat-value">{item.value}</h2>
          <p className="stat-label">{item.label}</p>
        </div>
      ))}
    </section>
  );
}
