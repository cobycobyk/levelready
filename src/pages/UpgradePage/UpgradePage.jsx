import { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
import "./UpgradePage.css";

export default function UpgradePage({ user, handleUpdateUser }) {
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState(user);
  const [error, setError] = useState("");

  const formRef = useRef();
  const history = useHistory();

  async function handleSubmit(e) {
    try {
      const updatedUser = await usersService.update(formData);
      handleUpdateUser(updatedUser);
    } catch {
      setError("Edit failed - Please Try Again");
    }
  }

  function handleChange(evt) {
    setFormData({ ...formData, order: evt });
    setError("");
    handleSubmit(evt);
  }
  return (
    <>
      <h1 className="upagrade__title">Upgrade Your Account</h1>
      <div className="fadeInDown upgrade">
        <div className="plans">
          <div className="plan">Premium Plan</div>
          <ul className="detail">
            <li>View Top Global Rankings of players</li>
            <li>Access to player Profiles</li>
            <li>Discover Top Players in your game</li>
            <li>Recieve badges to show off your skill</li>
            <li>Place your name on the global ranks</li>
            <li>Get detailed insights in your dashboard</li>
            <li>Direct Messaging with scouts/players</li>
            <li>Scouting reports generated weekly</li>
          </ul>
          <form
            className="info"
            ref={formRef}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="forms">
              <Link to="/" className="underlineHover login__signup">
                $9.99 / month
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
