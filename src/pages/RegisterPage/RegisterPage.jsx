import "./RegisterPage.css";
import { useState } from "react";
import { signUp } from "../../utilities/users-service";
import { Link, useHistory } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignUpForm2 from "../../components/SignUpForm/SignUpForm2";

export default function RegisterPage({ setUser }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    account: "",
    username: "",
    age: null,
    occupation: null,
    zip: null,
    gradyear: null,
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const history = useHistory();

  const [error, setError] = useState("");

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      delete formData.confirm;
      const user = await signUp(formData);
      setUser(user);
      history.push("/");
    } catch {
      //can be catch (err)
      //an error occured
      setError("Sign Up Failed - Try Again");
    }
  }
  function handleSelect(evt) {
    setFormData({ ...formData, account: evt });
    setError("");
    nextStep();
    console.log(formData);
  }
  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError("");
    console.log(formData);
  }

  function nextStep() {
    setStep(step + 1);
  }
  function previousStep() {
    setStep(step - 1);
  }

  if (step === 1) {
    return (
      <div className="register">
        <h1 className="register__title">Register for LevelReady</h1>
        <div className="steps">
          <div id="one" className="number">
            1
          </div>
          <div className="number">2</div>
          <div className="number">3</div>
        </div>
        <h3 className="register__title">Select Your Account Type</h3>
        <SignUpForm handleSelect={handleSelect} />
      </div>
    );
  } else if (step === 2) {
    return (
      <div className="register">
        <h1 className="register__title">Register for LevelReady</h1>
        <div className="steps">
          <div id="check" className="number">
            ✔️
          </div>
          <div id="two" className="number">
            2
          </div>
          <div className="number">3</div>
        </div>
        <h3 className="register__title">Enter your Information</h3>
        <SignUpForm2
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          previousStep={previousStep}
          error={error}
        />
      </div>
    );
  } else if (step === 3) {
    return <div className="register">register 3</div>;
  } else {
    return (
      <div className="register">Something went wrong, please try again</div>
    );
  }
}
