import React, { useState } from "react";
import "./LoginForm.css";

/**
 * PUBLIC_INTERFACE
 * LoginForm component displaying a centered login form with username and password fields.
 * Styled with a modern, dark theme, using primary (#1976d2), accent (#e91e63), and secondary (#424242) colors.
 *
 * Props:
 *   onLoginSuccess: (function) Called with (username) after successful demo login.
 */

function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    // For demo: any username/password where username==='user' and password==='demo' is valid
    if (username === "user" && password === "demo") {
      setError("");
      if (typeof onLoginSuccess === "function") {
        onLoginSuccess(username);
      }
    } else {
      setError("Incorrect username or password. (Try user/demo)");
    }
  };

  return (
    <div className="login-form-outer">
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="login-form-title">Sign In</h2>
        <div className="login-form-group">
          <label htmlFor="username" className="login-form-label">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="username"
            className="login-form-input"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password" className="login-form-label">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            className="login-form-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        {error && <div className="login-form-error">{error}</div>}
        <button className="login-form-submit" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
