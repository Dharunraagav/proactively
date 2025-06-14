import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import AuthDropdown from './AuthDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header ref={headerRef} className={`header ${isMenuOpen ? 'expanded' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <FontAwesomeIcon icon={faHeartbeat} className="logo-icon" />
          <span className="logo-text">ProVital</span>
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            )}
          </button>
        </div>
        <nav className={`nav ${isMenuOpen ? 'visible' : ''}`}>
          {/* Doctor and Patients sections for mobile */}
          <div className="mobile-auth-sections">
            <div className="auth-section">
              <span className="auth-section-title">Doctor</span>
              <div className="auth-links">
                <button onClick={() => navigate('/login')} className="auth-link">Login</button>
                <button onClick={() => navigate('/signup')} className="auth-link">Sign up</button>
              </div>
            </div>
            <div className="auth-section">
              <span className="auth-section-title">Patients</span>
              <div className="auth-links">
                <button onClick={() => navigate('/login')} className="auth-link">Login</button>
                <button onClick={() => navigate('/signup')} className="auth-link">Sign up</button>
              </div>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="nav-links-section">
            <button onClick={() => navigate('/list-practice')} className="nav-link">
              <span>List your practice</span>
              <span className="nav-arrow">→</span>
            </button>
            <button onClick={() => navigate('/employers')} className="nav-link">
              <span>For Employers</span>
              <span className="nav-arrow">→</span>
            </button>
            <button onClick={() => navigate('/courses')} className="nav-link">
              <span>Courses</span>
              <span className="nav-arrow">→</span>
            </button>
            <button onClick={() => navigate('/books')} className="nav-link">
              <span>Books</span>
              <span className="nav-arrow">→</span>
            </button>
            <button onClick={() => navigate('/speakers')} className="nav-link">
              <span>Speakers</span>
              <span className="nav-arrow">→</span>
            </button>
            <button onClick={() => navigate('/doctors')} className="nav-link">
              <span>Doctors</span>
              <span className="nav-arrow">→</span>
            </button>
          </div>
          
          {/* Desktop auth dropdown */}
          <div className="desktop-auth">
            <AuthDropdown />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
