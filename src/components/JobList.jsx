import React from 'react';

const jobs = [
  { id: 1, title: 'Frontend Developer', type: 'Full Time', color: '#e3f2fd' },
  { id: 2, title: 'Backend Developer', type: 'Part Time', color: '#f1f8e9' },
  { id: 3, title: 'Data Analyst Intern', type: 'Internship', color: '#fff3e0' },
  { id: 4, title: 'UI/UX Designer', type: 'Remote', color: '#fce4ec' },
];

function JobList({ onSelect }) {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="job-card"
          style={{ backgroundColor: job.color, cursor: 'pointer' }}
          onClick={() => onSelect(job)} // ✅ This line is critical
        >
          <h3>{job.title}</h3>
          <p><strong>Type:</strong> {job.type}</p>
        </div>
      ))}
    </div>
  );
}

export default JobList;
