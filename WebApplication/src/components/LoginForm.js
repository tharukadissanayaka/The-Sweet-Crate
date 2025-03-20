import React from "react";
import "../cssfiles/LoginForm.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission
    
  };

  return (
    <div className="login-container">
      
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <Link to="/ImageButton"><input type="submit" value="Login" /></Link>
        <div className="signup-container_1">
          <p>
            Don't have an account?
            <Link to="/SignupForm"> 
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
