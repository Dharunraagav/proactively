import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
  const [formData, setFormData] = useState({
    condition: '',
    location: '',
    insurance: ''
  });
  const [isClicked, setIsClicked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    // Handle form submission logic here
    console.log('Search form submitted:', formData);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-field">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input 
          type="text" 
          name="condition"
          placeholder="Condition, procedure, speciality..." 
          className="search-input"
          value={formData.condition}
          onChange={handleInputChange}
        />
      </div>
      <div className="search-field">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon" />
        <input 
          type="text" 
          name="location"
          placeholder="City, state, or zipcode" 
          className="search-input"
          value={formData.location}
          onChange={handleInputChange}
        />
      </div>
      <div className="search-field">
        <FontAwesomeIcon icon={faShieldAlt} className="search-icon" />
        <input 
          type="text" 
          name="insurance"
          placeholder="Insurance carrier" 
          className="search-input"
          value={formData.insurance}
          onChange={handleInputChange}
        />
      </div>
      <button 
        className={`find-btn ${isClicked ? 'clicked' : ''}`} 
        type="submit"
      >
        Find now
      </button>
    </form>
  );
};

export default SearchForm;
