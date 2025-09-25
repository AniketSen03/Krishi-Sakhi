import React, { useState, useRef } from "react";
import "../Styling/SearchSection.css";

export default function SearchSection() {
  const [searchText, setSearchText] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const recognitionRef = useRef(null);

  const startMic = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchText(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  // Handle file upload
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  // Clear input text
  const clearText = () => {
    setSearchText("");
  };

  return (
    <section className="search-section">
      <div className="search-container">
        <img src="/Logo.svg" alt="Logo" />
        <p className="search-subtitle">Your gateway to smarter farming</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search crops, tools, tips..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {/* Clear Text Button */}
          {searchText && (
            <button className="icon-btn" title="Clear Text" onClick={clearText}>
              <span style={{ fontWeight: "bold" }}>×</span>
            </button>
          )}

          {/* Voice Search Button */}
          <button className="icon-btn" title="Voice Search" onClick={startMic}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
            </svg>
          </button>

          {/* Upload Image Button */}
          <label className="icon-btn" title="Upload Image">
            <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleUpload} />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
            </svg>
          </label>

          {/* Search Button */}
          <button className="icon-btn" title="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>

        {/* Show uploaded file name */}
        {uploadedFile && <p>Uploaded: {uploadedFile}</p>}
      </div>
    </section>
  );
}
