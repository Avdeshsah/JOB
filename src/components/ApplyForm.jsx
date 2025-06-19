import React, { useState } from 'react';

function ApplyForm({ job }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    marks10: '',
    marks12: '',
    cgpa: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Applied for ${job.title} by ${form.name}`);
    // You can add real saving logic here
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto', marginTop: '2rem' }}>
      <h3>Apply for {job.title}</h3>
      {['name', 'email', 'phone', 'qualification', 'marks10', 'marks12', 'cgpa'].map(field => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field === 'marks10' ? '10th Marks' :
                      field === 'marks12' ? '12th Marks' :
                      field.toUpperCase()}
          value={form[field]}
          onChange={handleChange}
          required
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
        />
      ))}
      <button type="submit" style={{ padding: '10px 20px' }}>Submit Application</button>
    </form>
  );
}

export default ApplyForm;
