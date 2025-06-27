import React, { useState } from 'react';

function ApplyForm({ job }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    preferredName: '',
    address: '',
    phone: '',
    email: '',
    qualification1: '',
    institution1: '',
    year1: '',
    training: 'no',
    course: '',
    mode: '',
    employer: '',
    fromTo: '',
    position: '',
    reason: '',
    consent: false,
    resume: null
  });

  const handleChange = e => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setForm({ ...form, [name]: checked });
    } else if (type === 'file') {
      setForm({ ...form, resume: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Application submitted for ${job.title} by ${form.firstName} ${form.lastName}`);
    // Further saving logic here (API or backend)
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h3>Apply for {job.title}</h3>

      <label>Given name:</label>
      <input name="firstName" value={form.firstName} onChange={handleChange} required />

      <label>Family name:</label>
      <input name="lastName" value={form.lastName} onChange={handleChange} required />

      <label>Preferred name:</label>
      <input name="preferredName" value={form.preferredName} onChange={handleChange} />

      <label>Address:</label>
      <input name="address" value={form.address} onChange={handleChange} required />

      <label>Phone:</label>
      <input name="phone" value={form.phone} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} required />

      <hr />
      <h4>Qualification</h4>
      <input placeholder="Qualification Title" name="qualification1" value={form.qualification1} onChange={handleChange} />
      <input placeholder="Institution" name="institution1" value={form.institution1} onChange={handleChange} />
      <input placeholder="Year Completed" name="year1" value={form.year1} onChange={handleChange} />

      <p>Are you currently undertaking study?</p>
      <label><input type="radio" name="training" value="yes" checked={form.training === 'yes'} onChange={handleChange} /> Yes</label>
      <label><input type="radio" name="training" value="no" checked={form.training === 'no'} onChange={handleChange} /> No</label>

      <label>If yes, course/program name:</label>
      <input name="course" value={form.course} onChange={handleChange} />

      <label>Study mode:</label>
      <select name="mode" value={form.mode} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Full time">Full time</option>
        <option value="Part time">Part time</option>
        <option value="Distance">Distance</option>
        <option value="Other">Other</option>
      </select>

      <hr />
      <h4>Previous Employment</h4>
      <input placeholder="Employer name" name="employer" value={form.employer} onChange={handleChange} />
      <input placeholder="Dates from/to" name="fromTo" value={form.fromTo} onChange={handleChange} />
      <input placeholder="Position held" name="position" value={form.position} onChange={handleChange} />
      <input placeholder="Reason for leaving" name="reason" value={form.reason} onChange={handleChange} />

      <p>Do you agree to have referees contacted?</p>
      <label><input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} /> Yes</label>

      <hr />
      <label>Upload Resume:</label>
      <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />

      <button type="submit" style={{ marginTop: '1rem' }}>Submit Application</button>
    </form>
  );
}

export default ApplyForm;
