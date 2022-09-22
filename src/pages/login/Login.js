import React, { useState } from "react";
import "./login.css";

export const Login = () => {
  const [inputText, setInputText] = useState({
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleUsernameOnChange = (e) => {
    setInputText({
      ...inputText,
      username: e.target.value,
    });
  };
  const handlePasswordOnChange = (e) => {
    setInputText({
      ...inputText,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="login">
      <div className="login-form-container">
        <div className="login-header">
          <img src="images/TPS.png" alt="" className="logo" />
          <p className="welcome-message">Welcome to The Petstore admin page</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <labe className="label">USERNAME</labe>
          <input
            type="text"
            onChange={handleUsernameOnChange}
            value={inputText.username}
            placeholder="Username"
            className="input-field"
          />
          <label className="label">PASSWORD</label>
          <input
            type="password"
            onChange={handlePasswordOnChange}
            value={inputText.password}
            placeholder="Password"
            className="input-field"
          />
          <button className="login-btn">Login</button>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
};
