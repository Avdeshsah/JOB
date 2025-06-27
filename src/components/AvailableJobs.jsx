import React, { useState } from 'react';
import { FaBookmark, FaRegBookmark, FaArrowRight, FaBolt, FaGlobe, FaStar } from "react-icons/fa";
import 'react-icons/fa';
import AvailableJobs from './components/AvailableJobs';

// Example job data (replace with real data or props)
const jobsData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechNova',
    location: 'Remote',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    posted: '2 days ago',
    logo: 'https://ui-avatars.com/api/?name=TechNova&background=4F8EF7&color=fff',
    description: 'Work with React and modern web technologies to build amazing user experiences.',
    tags: ['Remote', 'Urgent', 'New'],
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'Cloudify',
    location: 'Bangalore, India',
    type: 'Part-time',
    salary: '$40/hr',
    posted: '5 hours ago',
    logo: 'https://ui-avatars.com/api/?name=Cloudify&background=222&color=fff',
    description: 'Design scalable APIs and work with Node.js, Express, and MongoDB.',
    tags: ['On-site'],
  },
  // Add more jobs as needed
];

function App() {
  return (
    <div>
      <AvailableJobs />
    </div>
  );
}

function AvailableJobs() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState({});

  // Simulate loading
  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const jobs = jobsData.filter(
    job =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  // Animation for job cards
  const cardAnimation = {
    animation: 'fadeInUp 0.7s',
    '@keyframes fadeInUp': {
      from: { opacity: 0, transform: 'translateY(30px)' },
      to: { opacity: 1, transform: 'none' }
    }
  };

  // Tag icon helper
  const tagIcon = tag => {
    if (tag === 'Remote') return <FaGlobe style={{ marginRight: 4 }} />;
    if (tag === 'Urgent') return <FaBolt style={{ marginRight: 4 }} />;
    if (tag === 'New') return <FaStar style={{ marginRight: 4 }} />;
    return null;
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #222 60%, #4F8EF7 100%)', // Changed to match SignIn page
        padding: '2.5rem 0',
        fontFamily: "'Inter', 'Montserrat', Arial, sans-serif",
      }}
    >
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: none;}
          }
          .job-card-animate {
            animation: fadeInUp 0.7s;
          }
          .job-divider {
            height: 1px;
            background: linear-gradient(90deg, #232a3b 0%, #4F8EF7 100%);
            margin: 1.5rem 0;
            border: none;
            opacity: 0.5;
          }
          .sticky-search {
            position: sticky;
            top: 0;
            z-index: 10;
            background: linear-gradient(120deg, #181818 60%, #222 100%);
            padding-top: 1rem;
          }
        `}
      </style>
      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '0 1.5rem',
      }}>
        <h2 style={{
          color: '#4F8EF7',
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontWeight: 700,
          fontSize: '2.2rem',
          marginBottom: '2rem',
          textAlign: 'center',
          letterSpacing: '1px',
        }}>
          Available Jobs
        </h2>
        <div className="sticky-search" style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}>
          <input
            type="text"
            placeholder="Search jobs, companies, or locations..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%',
              maxWidth: 400,
              padding: '0.8rem 1rem',
              borderRadius: '8px',
              border: '1.5px solid #4F8EF7',
              fontSize: '1rem',
              background: '#181818',
              color: '#fff',
              outline: 'none',
              boxShadow: '0 2px 8px rgba(79,142,247,0.07)',
            }}
          />
        </div>
        {loading ? (
          <div style={{ color: '#4F8EF7', textAlign: 'center', fontSize: '1.2rem', marginTop: '3rem' }}>
            Loading jobs...
          </div>
        ) : jobs.length === 0 ? (
          <div style={{ color: '#fff', textAlign: 'center', fontSize: '1.2rem', marginTop: '3rem' }}>
            No jobs found.
          </div>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            {jobs.map((job, idx) => (
              <React.Fragment key={job.id}>
                <div
                  className="job-card-animate"
                  style={{
                    background: '#222',
                    borderRadius: '14px',
                    boxShadow: '0 4px 24px rgba(79,142,247,0.08)',
                    padding: '1.5rem 1.2rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.3rem',
                    transition: 'transform 0.15s, box-shadow 0.15s',
                    border: '1.5px solid #232a3b',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(79,142,247,0.18)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(79,142,247,0.08)';
                  }}
                >
                  <img
                    src={job.logo}
                    alt={job.company}
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '12px',
                      background: '#fff',
                      objectFit: 'cover',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                      border: '2px solid #4F8EF7'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 6,
                    }}>
                      <h3 style={{
                        margin: 0,
                        color: '#fff',
                        fontFamily: "'Montserrat', Arial, sans-serif",
                        fontWeight: 600,
                        fontSize: '1.25rem',
                      }}>{job.title}</h3>
                      <span style={{
                        background: '#4F8EF7',
                        color: '#fff',
                        borderRadius: '6px',
                        padding: '0.3rem 0.8rem',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        marginLeft: 8
                      }}>{job.type}</span>
                    </div>
                    <div style={{
                      color: '#b0b8c1',
                      fontSize: '1rem',
                      marginBottom: 4,
                      fontWeight: 500,
                    }}>
                      {job.company} &middot; {job.location}
                    </div>
                    {/* 2. Job tags */}
                    <div style={{
                      display: 'flex',
                      gap: 8,
                      marginBottom: 8,
                      flexWrap: 'wrap'
                    }}>
                      {job.tags && job.tags.map(tag => (
                        <span key={tag} style={{
                          display: 'flex',
                          alignItems: 'center',
                          background: tag === 'Urgent' ? '#ff5252' : tag === 'New' ? '#4F8EF7' : '#232a3b',
                          color: tag === 'Urgent' ? '#fff' : tag === 'New' ? '#fff' : '#b0b8c1',
                          borderRadius: '5px',
                          padding: '0.18rem 0.7rem',
                          fontSize: '0.93rem',
                          fontWeight: 600,
                          letterSpacing: '0.5px'
                        }}>
                          {tagIcon(tag)}{tag}
                        </span>
                      ))}
                    </div>
                    <div style={{
                      color: '#fff',
                      fontSize: '1.05rem',
                      marginBottom: 8,
                      fontWeight: 400,
                    }}>
                      {job.description}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.2rem',
                      fontSize: '0.97rem',
                      color: '#4F8EF7',
                      fontWeight: 600,
                    }}>
                      <span>{job.salary}</span>
                      <span style={{ color: '#b0b8c1', fontWeight: 400 }}>{job.posted}</span>
                    </div>
                  </div>
                  <button
                    style={{
                      background: '#4F8EF7',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '7px',
                      padding: '0.7rem 1.2rem',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      marginLeft: '1rem',
                      alignSelf: 'center',
                      transition: 'background 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    }}
                    onMouseOver={e => (e.currentTarget.style.background = '#2563eb')}
                    onMouseOut={e => (e.currentTarget.style.background = '#4F8EF7')}
                  >
                    Apply <FaArrowRight />
                  </button>
                  {/* 3. Bookmark/save icon */}
                  <span
                    style={{
                      position: 'absolute',
                      top: 18,
                      right: 18,
                      cursor: 'pointer',
                      color: saved[job.id] ? '#4F8EF7' : '#b0b8c1',
                      fontSize: 22,
                      transition: 'color 0.2s'
                    }}
                    onClick={() => setSaved(s => ({ ...s, [job.id]: !s[job.id] }))}
                    title={saved[job.id] ? "Remove from saved" : "Save job"}
                  >
                    {saved[job.id] ? <FaBookmark /> : <FaRegBookmark />}
                  </span>
                </div>
                {/* 4. Divider between cards */}
                {idx < jobs.length - 1 && <hr className="job-divider" />}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;