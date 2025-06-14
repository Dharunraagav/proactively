import React from 'react';

const PillarCard = ({ pillar, isActive }) => {
  const pillarData = {
    nutrition: {
      image: require('../../assets/images/nutrition.jpg'),
      alt: 'Healthy nutrition and fresh vegetables',
      icon: '🩺',
      stat: '121/80 mmHg',
      title: 'Nutrition',
      description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.'
    },
    physical: {
      image: require('../../assets/images/physical-activity.jpg'),
      alt: 'Woman doing yoga outdoors',
      icon: '❤️',
      stat: '32 minutes',
      title: 'Physical activity',
      description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.'
    },
    sleep: {
      image: require('../../assets/images/sleep.jpg'),
      alt: 'Peaceful sleep and rest',
      icon: '🌙',
      stat: '8 hours',
      title: 'Restorative sleep',
      description: 'Consistent, quality sleep is essential for physical function and physiological recovery.'
    },
    stress: {
      image: require('../../assets/images/stress-management.jpg'),
      alt: 'Meditation and stress management',
      icon: '🧘',
      stat: '15 minutes',
      title: 'Stress management',
      description: 'Regular stress management practices help maintain mental well-being and reduce risk of stress-related conditions.'
    },
    social: {
      image: require('../../assets/images/social-connection.jpg'),
      alt: 'Social connection and community',
      icon: '👥',
      stat: '2+ hours',
      title: 'Social connection',
      description: 'Strong social connections and community engagement contribute to better mental health and longevity.'
    },
    substance: {
      image: require('../../assets/images/substance-abuse.jpg'),
      alt: 'Healthy lifestyle choices',
      icon: '🌿',
      stat: '0 intake',
      title: 'Substance abuse',
      description: 'Avoiding harmful substances and maintaining healthy habits is crucial for long-term health and wellness.'
    }
  };

  const data = pillarData[pillar];

  return (
    <div className={`pillar-card ${isActive ? 'active' : ''}`} id={pillar}>
      <img src={data.image} alt={data.alt} className="pillar-image" />
      <div className="pillar-info">
        <div className="pillar-stat">
          <span className="stat-icon">{data.icon}</span>
          <span className="stat-text">{data.stat}</span>
        </div>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default PillarCard;
