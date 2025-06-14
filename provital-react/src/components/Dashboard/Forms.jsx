import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import './Dashboard.css';

const Forms = () => {
  const [forms, setForms] = useState([]);
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchForms();
    fetchResponses();
  }, []);

  const fetchForms = async () => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      
      if (!userData.user) {
        setError('Please log in to view forms');
        return;
      }

      const { data, error } = await supabase
        .from('forms')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setForms(data || []);
    } catch (error) {
      setError('Error fetching forms');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchResponses = async () => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      
      if (!userData.user) {
        return;
      }

      const { data, error } = await supabase
        .from('form_responses')
        .select(`
          *,
          forms:form_id (title)
        `)
        .eq('last_edited_by', userData.user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setResponses(data || []);
    } catch (error) {
      setError('Error fetching form responses');
      console.error('Error:', error);
    }
  };

  const handleSubmitResponse = async (formId, responseData) => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      
      if (!userData.user) {
        setError('Please log in to submit form responses');
        return;
      }
      
      const { error } = await supabase
        .from('form_responses')
        .insert([
          {
            form_id: formId,
            response_data: responseData,
            last_edited_by: userData.user.id
          }
        ]);

      if (error) throw error;
      fetchResponses();
    } catch (error) {
      setError('Error submitting form response');
      console.error('Error:', error);
    }
  };

  if (loading) return <div className="dashboard-content">Loading...</div>;
  if (error) return <div className="dashboard-content error">{error}</div>;

  return (
    <div className="dashboard-content">
      <h2>Forms</h2>
      
      <div className="forms-container">
        <div className="forms-section">
          <h3>Available Forms</h3>
          <div className="forms-grid">
            {forms.map((form) => (
              <div key={form.id} className="form-card">
                <h4>{form.title}</h4>
                <p>{form.description}</p>
                <div className="form-fields">
                  {form.fields && typeof form.fields === 'object' && 
                    Object.entries(form.fields).map(([field, type]) => (
                      <div key={field} className="form-field">
                        <label>{field}</label>
                        <input type={type} name={field} />
                      </div>
                    ))
                  }
                </div>
                <button 
                  className="submit-form-btn"
                  onClick={() => handleSubmitResponse(form.id, {})}
                >
                  Submit Form
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="responses-section">
          <h3>Your Responses</h3>
          <div className="responses-list">
            {responses.map((response) => (
              <div key={response.id} className="response-card">
                <h4>{response.forms?.title}</h4>
                <p>Submitted: {new Date(response.created_at).toLocaleDateString()}</p>
                <pre>{JSON.stringify(response.response_data, null, 2)}</pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
