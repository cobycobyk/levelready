import "./PaymentPage.css";
import { Link } from "react-router-dom";

export default function PaymentPage() {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form>
          <input
            type="text"
            id="login"
            placeholder="name"
            className="fadeIn second"
          />
          <input
            type="text"
            id="login"
            placeholder="Card Number"
            className="fadeIn third"
          />
          <input
            type="text"
            id="login"
            placeholder="EXP"
            className="fadeIn fourth"
          />
          <input
            type="text"
            id="login"
            placeholder="cvv"
            className="fadeIn fifth"
          />
          <h6>✔️ I agree to the terms of service</h6>
          <h6>
            ✔️ I acknowledge the monthly recurring charge of $9.99 per month.
            Cancel anytime.
          </h6>
          <Link to="/" className="underlineHover login__signup">
            Submit
          </Link>
        </form>
      </div>
    </div>
  );
}
