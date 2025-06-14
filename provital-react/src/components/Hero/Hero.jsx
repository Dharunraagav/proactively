import React from 'react';
import ImageGrid from './ImageGrid';
import SearchForm from './SearchForm';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <ImageGrid />
          <div className="hero-text">
            <h1>Book an appointment with <span className="highlight">lifestyle medicine</span> experts</h1>
            <p className="hero-sub">Optimize your lifestyle and reverse chronic diseases.</p>
            <SearchForm />
          </div>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;
