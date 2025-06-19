import React, { useState } from 'react';
import Navbar from './components/Navbar';
import JobList from './components/JobList';
import ApplyForm from './components/ApplyForm';
import SignIn from './components/SignIn';
import './App.css';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSignInClick = () => setShowSignIn(true);
  const handleSignOutClick = () => {
    setIsSignedIn(false);
    setShowSignIn(false);
    setSelectedJob(null);
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
    setShowSignIn(false);
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleBack = () => {
    setSelectedJob(null);
  };

  return (
    <div className="app">
      <Navbar
        isSignedIn={isSignedIn}
        onSignInClick={handleSignInClick}
        onSignOutClick={handleSignOutClick}
      />

      {showSignIn ? (
        <SignIn onSignIn={handleSignIn} />
      ) : selectedJob ? (
        <>
          <button onClick={handleBack} style={{ margin: '1rem' }}>⬅ Back to Jobs</button>
          <h2 style={{ textAlign: 'center' }}>{selectedJob.title}</h2>
          <p style={{ textAlign: 'center' }}><strong>Type:</strong> {selectedJob.type}</p>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            This is a detailed job description for the role of <strong>{selectedJob.title}</strong>. 
            You’ll be responsible for collaborating with teams, writing clean code, and learning new technologies.
          </p>
          {isSignedIn ? (
            <ApplyForm job={selectedJob} />
          ) : (
            <p style={{ textAlign: 'center', color: 'gray' }}>Please sign in to apply.</p>
          )}
        </>
      ) : (
        <>
          <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Available Jobs</h2>
          <JobList onSelect={handleJobSelect} />
        </>
      )}
    </div>
  );
}

export default App;
