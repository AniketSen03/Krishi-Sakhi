import React, { useEffect, useRef } from "react";
import "../Styling/FarmingAssistant.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function FarmingAssistant() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const elementsToAnimate = sectionRef.current.querySelectorAll(
        ".farming-title, .farming-location"
      );

      gsap.from(elementsToAnimate, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <section className="farming-assistant" ref={sectionRef}>
      <div className="farming-overlay">
        <h2 className="farming-title">Personal Farming Assistant</h2>
        <p className="farming-location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>{" "}
          Wayanad, Kerala
        </p>
         <Link to="/chatbot">
          <button className="farming-button">Get Started →</button>
        </Link>
      </div>
    </section>
  );
}
