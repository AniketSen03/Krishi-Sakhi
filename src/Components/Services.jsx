import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "../Styling/Services.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const services = [
    { id: "01", name: "Activity Tracking", img: "/8.jpg", route: "/activity-tracking" },
    { id: "02", name: "Krishi Store", img: "/9.jpg", route: "/krishi-store" },
    { id: "03", name: "Past Records", img: "/3.jpg", route: "/past-records" },
    { id: "04", name: "Weather", img: "/12.jpg", route: "/weather-forecast" },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll(".service-card"), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <Link to={service.route} key={service.id} className="service-card-link">
            <div className="service-card">
              <img src={service.img} alt={service.name} className="service-img" />
              <div className="service-overlay">
                <p className="service-id">{service.id}</p>
                <h3 className="service-name">{service.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
