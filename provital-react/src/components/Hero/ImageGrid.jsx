import React from 'react';
import heroCooking from '../../assets/images/hero-cooking.jpg';
import heroYoga from '../../assets/images/hero-yoga.jpg';
import heroBeach from '../../assets/images/hero-beach.jpg';
import heroDoctor from '../../assets/images/hero-doctor.jpg';

const ImageGrid = () => {
  // Column 1 images (slides down) - More images for seamless loop
  const column1Images = [
    { src: heroCooking, alt: "Healthy cooking preparation" },
    { src: heroBeach, alt: "Beach yoga exercise" },
    { src: heroCooking, alt: "Healthy cooking preparation" },
    { src: heroBeach, alt: "Beach yoga exercise" },
    { src: heroCooking, alt: "Healthy cooking preparation" },
    { src: heroBeach, alt: "Beach yoga exercise" }
  ];

  // Column 2 images (slides up) - More images for seamless loop
  const column2Images = [
    { src: heroYoga, alt: "Yoga meditation practice" },
    { src: heroDoctor, alt: "Doctor patient consultation" },
    { src: heroYoga, alt: "Yoga meditation practice" },
    { src: heroDoctor, alt: "Doctor patient consultation" },
    { src: heroYoga, alt: "Yoga meditation practice" },
    { src: heroDoctor, alt: "Doctor patient consultation" }
  ];

  return (
    <div className="image-grid">
      <div className="image-column column-1">
        <div className="image-slider slider-down">
          {/* Triple the images for seamless continuous loop */}
          {[...column1Images, ...column1Images, ...column1Images].map((image, index) => (
            <img 
              key={`col1-${index}`}
              src={image.src} 
              alt={image.alt} 
              className="hero-img" 
            />
          ))}
        </div>
      </div>
      <div className="image-column column-2">
        <div className="image-slider slider-up">
          {/* Triple the images for seamless continuous loop */}
          {[...column2Images, ...column2Images, ...column2Images].map((image, index) => (
            <img 
              key={`col2-${index}`}
              src={image.src} 
              alt={image.alt} 
              className="hero-img" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
