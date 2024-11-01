import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import linkedin from './linkedin.png'
import github from './github.png'
import kaggle from './kaggle.png'
import medium from './medium.png'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:5001/send-email', formData);
      if (response.status === 200) {
        alert('Email sent successfully!');
      }
    } catch (error) {
      alert('Error sending email. Please try again.');
      console.error(error);
    }
  };

  return (
    <div id="contact" style={{backgroundColor:"#ed6f63" ,minHeight:"100vh",fontFamily:"Oxanium",borderRadius:"50px 50px 0 0"}}>
      <div style={{
        fontSize: "90px",
        fontWeight: "bold",
        marginBottom: "40px",
        textAlign: "left",
        marginLeft: "120px",
        paddingTop:"50px"
      }}>
        Get in Touch
      </div>
      <div style={{textAlign:"left"}}>
        <form onSubmit={handleSubmit} className="form-container"> 
          <span>Full Name</span>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange} 
            required
          />

          <span>Email</span>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <span>Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type='submit'>Send</button>
        </form>
      </div>
      <div className='socials'>
          <a href='https://www.linkedin.com/in/chhavi-dhankhar-a488a9228/' target='_blank'><img src={linkedin}/></a>
          <a href='https://github.com/Chdh11' target='_blank'><img src={github}/></a>
          <a href='https://www.kaggle.com/chhavidhankhar11' target='_blank'><img src={kaggle}/></a>
          <a href='https://medium.com/@chhavidhankhar07' target='_blank'><img src={medium}/></a>
      </div>
    </div>
  );
}
