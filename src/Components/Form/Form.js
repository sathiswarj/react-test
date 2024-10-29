import React, { useState } from 'react';

const FormIndex = () => {
  const [formData, setFormData] = useState({ userName: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData); 
   };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="userName"  
            value={formData.userName}  
            onChange={handleChange} 
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email" 
            value={formData.email}  
            onChange={handleChange}  
            placeholder="Enter your email"
 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormIndex;
