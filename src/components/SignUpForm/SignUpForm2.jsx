import "./SignUpForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpForm2({
  handleSubmit,
  formData,
  handleChange,
  previousStep,
  error,
}) {
  const disable = formData.password !== formData.confirm;
  return (
    <div className="plan">
      <div className="wrapper fadeInDown">
        <div id="formContent" onSubmit={handleSubmit}>
          <div className="fadeIn first">
            <img src="https://i.imgur.com/W9JYIXE.png" alt="logo" width="60" />
          </div>
          <form>
            <input
              type="text"
              id="login"
              placeholder="name"
              className="fadeIn second"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="email"
              className="fadeIn third"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="password"
              className="fadeIn fourth"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="confirm password"
              className="fadeIn fifth"
              name="confirm"
              value={formData.confirm}
              onChange={handleChange}
              required
            />
            <input
              type="submit"
              placeholder="name"
              className="fadeIn sixth"
              disabled={disable}
              value="Sign Up"
            />
          </form>
          <p className="error-message">&nbsp;{error}</p>
          <div id="formFooter">
            <input
              type="text"
              className="underlineHover login__signup"
              value="< Back"
              onClick={previousStep}
            />
          </div>
        </div>
      </div>
      <div className="wrapper fadeInDown">
        <div id="formContent" onSubmit={handleSubmit}>
          <div className="fadeIn first">
            <img src="https://i.imgur.com/W9JYIXE.png" alt="logo" width="60" />
          </div>
          <form>
            <input
              type="text"
              id="login"
              placeholder="name"
              className="fadeIn second"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="email"
              className="fadeIn third"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="password"
              className="fadeIn fourth"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="confirm password"
              className="fadeIn fifth"
              name="confirm"
              value={formData.confirm}
              onChange={handleChange}
              required
            />
            <input
              type="submit"
              placeholder="name"
              className="fadeIn sixth"
              disabled={disable}
              value="Sign Up"
            />
          </form>
          <p className="error-message">&nbsp;{error}</p>
          <div id="formFooter">
            <button
              className="underlineHover login__signup"
              onClick={previousStep}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
