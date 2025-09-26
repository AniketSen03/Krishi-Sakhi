import React, { useEffect, useRef } from "react";
import "../Styling/NewsAndUpdates.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NewsAndUpdates() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const elementsToAnimate = sectionRef.current.querySelectorAll(
        ".newsletter-title, .newsletter-input"
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
    <div className="newsletter-section" ref={sectionRef}>
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
