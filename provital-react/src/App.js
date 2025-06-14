import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/home" element={
            <>
              <Header />
              <Hero />
              <HowItWorks />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
