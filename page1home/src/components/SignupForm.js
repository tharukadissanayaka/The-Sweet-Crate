import React from "react";
import "../cssfiles/SignupForm.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form action="/submit_signup" method="post">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <Link to ="/ImageButton"><button type="submit">
          <a href="page3.html" className="button-link">Sign Up</a>
        </button></Link>
      </form>
    </div>
  );
};

export default SignupForm;
