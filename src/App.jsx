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
  const [showForm, setShowForm] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowForm(false);
  };

  const handleSignOutClick = () => {
    setIsSignedIn(false);
    setShowSignIn(false);
    setSelectedJob(null);
    setShowForm(false);
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
    setShowSignIn(false);
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setShowForm(false); // Reset form state when selecting new job
  };

  const handleBack = () => {
    setSelectedJob(null);
    setShowForm(false);
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
            {/* Example job description */}
            We are looking for a <strong>{selectedJob.title}</strong> to join our dynamic team. 
            You’ll be responsible for building, maintaining, and scaling our products. 
            This is a great opportunity to grow your career in a collaborative environment.
          </p>

          {!showForm ? (
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setShowForm(true)}
                style={{ padding: '10px 20px', marginTop: '20px' }}
              >
                Apply for this Job
              </button>
            </div>
          ) : (
            isSignedIn ? (
              <ApplyForm job={selectedJob} />
            ) : (
              <p style={{ textAlign: 'center', color: 'gray' }}>
                Please sign in to apply.
              </p>
            )
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
