import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faFileAlt, 
  faComments, 
  faFolder,
  faSignOutAlt 
} from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import HowItWorks from '../HowItWorks/HowItWorks';
import Forms from './Forms';
import Documents from './Documents';
import Consultations from './Consultations';
import './Dashboard.css';

const DashboardHome = () => (
  <>
    <Header />
    <Hero />
    <HowItWorks />
  </>
);

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    avatar_url: '',
    role: ''
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    // Static site - no profile fetching logic
    setLoading(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    if (profile) {
      setFormData({
        full_name: profile.full_name || '',
        avatar_url: profile.avatar_url || '',
        role: profile.role || 'User'
      });
    }
  };

  const handleSave = async () => {
    // Static site - no save logic
    setEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) return <div className="dashboard-content">Loading...</div>;
  if (error) return <div className="dashboard-content error">{error}</div>;

  return (
    <div className="dashboard-content">
      <h2>Profile</h2>
      <div className="profile-info">
        <div className="profile-header">
          <div className="profile-avatar">
            {formData.avatar_url ? (
              <img src={formData.avatar_url} alt="Profile" className="avatar-image" />
            ) : (
              <FontAwesomeIcon icon={faUser} size="3x" />
            )}
          </div>
          <div className="profile-details">
            {editing ? (
              <div className="profile-edit-form">
                <div className="form-group">
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="avatar_url">Avatar URL</label>
                  <input
                    type="url"
                    id="avatar_url"
                    name="avatar_url"
                    value={formData.avatar_url}
                    onChange={handleInputChange}
                    placeholder="Enter avatar image URL"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                  >
                    <option value="User">User</option>
                    <option value="Patient">Patient</option>
                    <option value="Healthcare Provider">Healthcare Provider</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div className="profile-actions">
                  <button onClick={handleSave} className="save-btn" disabled={loading}>
                    Save Changes
                  </button>
                  <button onClick={handleCancel} className="cancel-btn">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3>{profile?.full_name || 'User Profile'}</h3>
                <p>Role: {profile?.role || 'User'}</p>
                {profile?.updated_at && (
                  <p className="last-updated">
                    Last updated: {new Date(profile.updated_at).toLocaleDateString()}
                  </p>
                )}
                <button onClick={handleEdit} className="edit-profile-btn">
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    // Static site - no user checking logic
    setLoading(false);
  };

  const handleSignOut = async () => {
    // Static site - no sign out logic
    navigate('/login');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <Link to="/dashboard" className="logo">
            <FontAwesomeIcon icon={faHome} className="logo-icon" />
            <span>ProVital</span>
          </Link>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-item">
            <FontAwesomeIcon icon={faHome} />
            <span>Dashboard</span>
          </Link>
          <Link to="/dashboard/profile" className="nav-item">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </Link>
          <Link to="/dashboard/forms" className="nav-item">
            <FontAwesomeIcon icon={faFileAlt} />
            <span>Forms</span>
          </Link>
          <Link to="/dashboard/consultations" className="nav-item">
            <FontAwesomeIcon icon={faComments} />
            <span>Consultations</span>
          </Link>
          <Link to="/dashboard/documents" className="nav-item">
            <FontAwesomeIcon icon={faFolder} />
            <span>Documents</span>
          </Link>
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleSignOut} className="sign-out-btn">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
