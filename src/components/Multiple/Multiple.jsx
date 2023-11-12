import React, { useState } from "react";
import "./Multiple.css"; 

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    portfolioWebsite: "",
    position: "",
    phone: "",
    willingToRelocate: "",
    comments: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `First Name: ${formData.firstName}, ` +
      `Last Name: ${formData.lastName}, ` +
      `Email: ${formData.email}, ` +
      `Portfolio Website: ${formData.portfolioWebsite}, ` +
      `Position: ${formData.position}, ` +
      `Phone: ${formData.phone}, ` +
      `Willing to Relocate: ${formData.willingToRelocate}, ` +
      `Comments: ${formData.comments}`
    );
  };
  

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      portfolioWebsite: "",
      position: "",
      phone: "",
      willingToRelocate: "",
      comments: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="applicationForm">
      <label className="multiple__text" htmlFor="firstName">
      First Name *
      </label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name *"
        required
      />

<label className="multiple__text" htmlFor="lastName">
      Last Name *
      </label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name *"
        required
      />


<label className="multiple__text" htmlFor="email">
        Email *
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email *"
        required
      />

<label className="multiple__text" htmlFor="portfolioWebsite">
     Portfolio Website
      </label>
      <input
        type="url"
        name="portfolioWebsite"
        value={formData.portfolioWebsite}
        onChange={handleChange}
        placeholder="http://"
      />

<label className="multiple__text" htmlFor="position">
     Position you are applying for *
      </label>
      <select
        name="position"
        value={formData.position}
        onChange={handleChange}
        required
      >
        <option value="">Select Position *</option>
        <option value="securityAnalyst">Security Analyst</option>
        <option value="tester">Tester</option>
        <option value="softwareEngineer">Software Engineer</option>
        <option value="frontEndDeveloper">Front End Developer</option>
      </select>


      <label className="multiple__text" htmlFor="position">
        Phone * (must be 10 digits)
      </label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone * (must be 10 digits)"
        pattern="\d{10}"
        required
      />
      


      <div className="radio-group">
      <label className="multiple__text" htmlFor="willingToRelocate">
      Willing to relocate?
      </label>
  <label>
    <input
      type="radio"
      name="willingToRelocate"
      value="yes"
      checked={formData.willingToRelocate === "yes"}
      onChange={handleChange}
    />
    Yes
  </label>

  <label>
    <input
      type="radio"
      name="willingToRelocate"
      value="no"
      checked={formData.willingToRelocate === "no"}
      onChange={handleChange}
    />
    No
  </label>

  <label>
    <input
      type="radio"
      name="willingToRelocate"
      value="notSure"
      checked={formData.willingToRelocate === "notSure"}
      onChange={handleChange}
    />
    Not Sure
  </label>
</div>



      <label className="multiple__text" htmlFor="comments">
        Reference / Comments / Questions
      </label>
      <textarea
        name="comments"
        value={formData.comments}
        onChange={handleChange}
        placeholder="Reference / Comments / Questions"
      />

<div className="button-container">
  <button type="submit">Send Application</button>
  <button type="button" onClick={resetForm}>Reset</button>
</div>


    </form>
  );
}
