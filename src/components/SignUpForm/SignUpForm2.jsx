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
    <div className="wrapper fadeInDown information">
      <div className="information" onSubmit={handleSubmit}>
        <form className="info">
          <div className="forms">
            <div className="left">
              <h3>Register for an Account (required)</h3>
              <input
                type="text"
                id="login"
                placeholder="Name"
                className="fadeIn second"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="fadeIn third"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="login"
                placeholder="Username"
                className="fadeIn second"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="fadeIn fourth"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Confirm Password"
                className="fadeIn fifth"
                name="confirm"
                value={formData.confirm}
                onChange={handleChange}
                required
              />
            </div>
            <div className="right">
              <h3>Other Information</h3>
              <input
                type="text"
                id="login"
                placeholder="Age"
                className="fadeIn second"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <input
                type="text"
                id="login"
                placeholder="Occupation"
                className="fadeIn third"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
              <input
                type="text"
                id="login"
                placeholder="Zipcode"
                className="fadeIn fourth"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
              />
              <input
                type="text"
                id="login"
                placeholder="Graduating Year"
                className="fadeIn fifth"
                name="gradyear"
                value={formData.gradyear}
                onChange={handleChange}
              />
            </div>
          </div>
          <input
            type="submit"
            placeholder="name"
            className="underlineHover login__signup"
            disabled={disable}
            value="Sign Up"
          />
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
      <div id="formFooter">
        <button className="underlineHover login__signup" onClick={previousStep}>
          Back
        </button>
      </div>
    </div>
  );
}
