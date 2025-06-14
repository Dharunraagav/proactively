import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faFileAlt, faCheckCircle, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const Consultations = () => {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newRequest, setNewRequest] = useState({
    project_summary: '',
    goals: ''
  });

  useEffect(() => {
    fetchConsultations();
  }, []);

  const fetchConsultations = async () => {
    try {
      setLoading(false);
    } catch (error) {
      setError('Error fetching consultations');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setNewRequest({ project_summary: '', goals: '' });
      fetchConsultations();
    } catch (error) {
      setError('Error submitting consultation request');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <FontAwesomeIcon icon={faCheckCircle} className="status-icon completed" />;
      case 'pending':
        return <FontAwesomeIcon icon={faHourglassHalf} className="status-icon pending" />;
      default:
        return null;
    }
  };

  if (loading) return <div className="dashboard-content">Loading...</div>;
  if (error) return <div className="dashboard-content error">{error}</div>;

  return (
    <div className="dashboard-content">
      <h2>Consultations</h2>

      <div className="consultations-container">
        <div className="new-consultation-section">
          <h3>Request New Consultation</h3>
          <form onSubmit={handleSubmitRequest} className="consultation-form">
            <div className="form-group">
              <label htmlFor="project_summary">Project Summary</label>
              <textarea
                id="project_summary"
                value={newRequest.project_summary}
                onChange={(e) => setNewRequest(prev => ({
                  ...prev,
                  project_summary: e.target.value
                }))}
                placeholder="Describe your project or consultation needs"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="goals">Goals</label>
              <textarea
                id="goals"
                value={newRequest.goals}
                onChange={(e) => setNewRequest(prev => ({
                  ...prev,
                  goals: e.target.value
                }))}
                placeholder="What are your goals for this consultation?"
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              <FontAwesomeIcon icon={faCalendarPlus} />
              Request Consultation
            </button>
          </form>
        </div>

        <div className="consultations-list">
          <h3>Your Consultations</h3>
          {consultations.length === 0 ? (
            <p>No consultation requests yet.</p>
          ) : (
            <div className="consultations-grid">
              {consultations.map((consultation) => (
                <div key={consultation.id} className="consultation-card">
                  <div className="consultation-header">
                    <div className="status">
                      {getStatusIcon(consultation.status)}
                      <span>{consultation.status}</span>
                    </div>
                    <div className="date">
                      {new Date(consultation.created_at).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="consultation-body">
                    <h4>Project Summary</h4>
                    <p>{consultation.project_summary}</p>
                    
                    <h4>Goals</h4>
                    <p>{consultation.goals}</p>

                    {consultation.consultation_documents?.length > 0 && (
                      <div className="documents-section">
                        <h4>
                          <FontAwesomeIcon icon={faFileAlt} />
                          Related Documents
                        </h4>
                        <ul>
                          {consultation.consultation_documents.map((doc) => (
                            <li key={doc.id}>{doc.file_name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Consultations;
