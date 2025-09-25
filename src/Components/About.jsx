import React from "react";
import "../Styling/About.css";

const sections = [
    {
        title: "Problem",
        content: `Kerala’s smallholder farmers often lack access to personalized, timely agricultural advice. 
              Generic advisories fail to consider local crop choices, weather, soil conditions, or farming practices. 
              Many farmers also don’t maintain activity records, limiting their ability to learn from past seasons 
              and access scheme benefits.`,
        image: "https://wallpaperaccess.com/full/1635212.jpg",
    },
    {
        title: "Challenge",
        content: `Build an AI-powered personal farming assistant that acts like a digital companion for 
              each farmer—understanding their specific context, guiding their actions, and learning over time.`,
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=60",
    },
    {
        title: "Core Features",
        content: `Farmer & Farm Profiling, Conversational Interface in Malayalam, Activity Tracking, 
              Personalized Advisory, Reminders & Alerts, Knowledge Engine.`,
        image: "https://images.unsplash.com/photo-1581091012184-4b5c0f3c8bb0?auto=format&fit=crop&w=800&q=60",
    },
    {
        title: "Expected Impact",
        content: `🌱 Empowers farmers with personalized, on-demand support.
              🌱 Enhances productivity and sustainability through timely actions.
              🌱 Bridges the knowledge gap using AI + local context.`,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    },
];

export default function About() {
    return (
        <section className="about-section">
            <div className="intro">
                <h2>About <span>Krishi Sakhi</span></h2>
                <img
                    src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=60"
                    alt="Krishi Sakhi Intro"
                    className="intro-image"
                />
                <p className="intro-text">
                    Krishi Sakhi is your AI-powered farming companion, helping smallholder farmers in Kerala with personalized advice, tracking, and real-time alerts to optimize productivity and sustainability.
                </p>
            </div>

            <div className="about-container">
                {sections.map((section, index) => (
                    <div
                        className={`about-row ${index % 2 === 0 ? "image-left" : "image-right"}`}
                        key={index}
                    >
                        <div className="about-image">
                            <img src={section.image} alt={section.title} />
                        </div>
                        <div className="about-content">
                            <h3 className="sub-heading">{section.title}</h3>
                            <p>{section.content}</p>

                            {section.title === "Core Features" && (
                                <ul className="feature-list">
                                    <li><strong>Farmer & Farm Profiling:</strong> Capture location, land size, crop, soil type, irrigation.</li>
                                    <li><strong>Conversational Interface:</strong> Interact in Malayalam via voice or text.</li>
                                    <li><strong>Activity Tracking:</strong> Log sowing, irrigation, input use, or pest issues.</li>
                                    <li><strong>Personalized Advisory:</strong> AI-driven contextual tips like weather alerts and pest warnings.</li>
                                    <li><strong>Reminders & Alerts:</strong> Timely nudges for crop operations, scheme deadlines, and price trends.</li>
                                    <li><strong>Knowledge Engine:</strong> Continuous learning from local crop calendars, pest data, and best practices.</li>
                                </ul>
                            )}
                        </div>
                    </div>
                ))}

                <div className="cta">
                    <button className="about-btn">Explore Our Solution →</button>
                </div>
            </div>
        </section>
    );
}
