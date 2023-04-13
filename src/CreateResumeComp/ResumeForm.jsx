import React from 'react';

const ResumeForm = ({ formData, onFormChange }) => {
  return (
    <div className="resume">
      <h2>Enter Your Resume Information</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name || ''} onChange={onFormChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email || ''} onChange={onFormChange} />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" value={formData.phone || ''} onChange={onFormChange} />

      <label htmlFor="experience">Experience:</label>
      <textarea id="experience" name="experience" value={formData.experience || ''} onChange={onFormChange} />
    </div>
  );
};

export default ResumeForm;
