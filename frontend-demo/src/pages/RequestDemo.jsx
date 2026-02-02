import { useState } from "react";
import "../styles/demo.css";

function RequestDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Demo Request Submitted:", formData);
    alert("Demo request submitted (frontend only)");
  }

  return (
    <div className="demo-container">
      <h1>Request a Demo</h1>
      <p>See how KOI helps secure your organization.</p>

      <form className="demo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Work Email"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Tell us about your needs"
          onChange={handleChange}
        />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default RequestDemo;
