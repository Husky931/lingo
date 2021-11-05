import React from "react";

export default function SignUpArea() {
  return (
    <div className="form-container">
      <h2 className="form-header">Get Early Access</h2>
      <p className="form-text">
        Join the appointment list and experience Lingo3D for the first time
      </p>
      <form id="main" className="form-register">
        <input type="email" className="input" placeholder="Your email" />
        <button className="cta">Reserve</button>
      </form>
    </div>
  );
}
