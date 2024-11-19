import React, { useState } from "react";
import '../styles/Register.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    relationship: "",
    phone: "",
    city: "",
    emergencyContact: "",
    emergencyPhone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
    // Add your logic for form submission (e.g., API call)
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="page-title">Registration Form</h1>

        {/* Personal Information */}
        <h4>Personal Information</h4>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="relationship">Relationship</label>
            <select
              id="relationship"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              required
            >
              <option value="">Select Relationship Status</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
              <option value="Other relation">Other relation</option>
            </select>
          </div>
        </div>

        {/* Contact Information */}
        <h4>Contact Information</h4>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Contact Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emergencyContact">Emergency Contact Name:</label>
            <input
              type="text"
              id="emergencyContact"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              required
            />

            <label htmlFor="emergencyPhone">Emergency Contact Number:</label>
            <input
              type="tel"
              id="emergencyPhone"
              name="emergencyPhone"
              pattern="[0-9]{10}"
              value={formData.emergencyPhone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Password Information */}
        <h4>Set Password</h4>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit">Sign Up</button>
        <p className="switch-form">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
