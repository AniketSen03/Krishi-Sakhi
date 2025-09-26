import { useState } from "react";
import "../Styling/Header.css"; // Import your CSS file
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <div className="logo">
            <img src="/Logo.svg" alt="" />
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'/contact'}>Contact</Link>
          </nav>
          {/* Desktop Button */}
          <div className="desktop-btn">
            <Link to={'/signin'} ><button className="signinbtn">SignIn</button></Link>
            <Link to={'/signup'}><button  className="signupbtn">SignUp</button></Link>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-btn">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? "×" : "≡"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <nav>
              <Link to={'/'} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to={'/about'} onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to={'/services'} onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to={'/contact'} onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link to={'/signin'}><button className="siginbtn">SignIn</button></Link>
              <Link to={'/signup'}><button className="signupbtn">SignUP</button></Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
