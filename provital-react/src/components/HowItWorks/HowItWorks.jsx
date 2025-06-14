import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import PillarCard from './PillarCard';

const HowItWorks = () => {
  const [currentPillar, setCurrentPillar] = useState('nutrition');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);

  const pillars = useMemo(() => ['nutrition', 'physical', 'sleep', 'stress', 'social', 'substance'], []);

  const handlePillarClick = (pillar, e) => {
    // Create ripple effect
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    setCurrentPillar(pillar);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    clearInterval(autoSlideRef.current);
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    
    if (Math.abs(diffX) > 50) {
      const currentIndex = pillars.indexOf(currentPillar);
      if (diffX > 0) {
        // Swipe left - next slide
        const nextIndex = currentIndex < pillars.length - 1 ? currentIndex + 1 : 0;
        setCurrentPillar(pillars[nextIndex]);
      } else {
        // Swipe right - previous slide
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : pillars.length - 1;
        setCurrentPillar(pillars[prevIndex]);
      }
    }
    
    setIsDragging(false);
    startAutoSlide();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const startAutoSlide = useCallback(() => {
    autoSlideRef.current = setInterval(() => {
      setCurrentPillar(current => {
        const currentIndex = pillars.indexOf(current);
        return pillars[currentIndex < pillars.length - 1 ? currentIndex + 1 : 0];
      });
    }, 5000);
  }, [pillars]);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideRef.current);
  }, [startAutoSlide]);

  const handlePrevClick = () => {
    const currentIndex = pillars.indexOf(currentPillar);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : pillars.length - 1;
    setCurrentPillar(pillars[prevIndex]);
  };

  const handleNextClick = () => {
    const currentIndex = pillars.indexOf(currentPillar);
    const nextIndex = currentIndex < pillars.length - 1 ? currentIndex + 1 : 0;
    setCurrentPillar(pillars[nextIndex]);
  };

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">HOW IT WORKS</h2>
        <div className="section-header">
          <h3 className="section-subtitle">
            <span className="highlight-orange">Lifestyle as medicine:</span> The six pillars
          </h3>
          <div className="nav-arrows">
            <button className="nav-arrow prev" onClick={handlePrevClick}>←</button>
            <button className="nav-arrow next" onClick={handleNextClick}>→</button>
          </div>
        </div>
        <div className="pillars-nav">
          {pillars.map(pillar => (
            <button
              key={pillar}
              className={`pillar-btn ${currentPillar === pillar ? 'active' : ''}`}
              onClick={(e) => handlePillarClick(pillar, e)}
            >
              {pillar.charAt(0).toUpperCase() + pillar.slice(1)}
            </button>
          ))}
        </div>
        <div className="pillars-content">
          <motion.div 
            className="pillars-slider"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            initial={false}
            animate={{
              x: `-${pillars.indexOf(currentPillar) * 345}px`
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {pillars.map(pillar => (
              <PillarCard
                key={pillar}
                pillar={pillar}
                isActive={currentPillar === pillar}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
