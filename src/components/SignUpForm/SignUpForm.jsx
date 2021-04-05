import "./SignUpForm.css";
import { Link } from "react-router-dom";

export default function SignUpForm1({ handleSelect }) {
  const values = ["Player"];
  return (
    <div className="signup1">
      <div className="cards">
        <div className="fadeIn first">
          <button
            type=""
            className="accountCardButton , playercard"
            onClick={(e) => handleSelect("Player")}
          >
            <div className="accountCard">
              <img
                className="account__pic"
                src="https://i.imgur.com/pg0ZLwR.png"
                alt="logo"
                width="200"
              />
              <div className="account__title">Player</div>
              <div className="account__desc">
                For Players that want to get recruited and scouted. Can also see
                their gameplay insights
              </div>
            </div>
          </button>
        </div>
        <div className="fadeIn first">
          <button
            className="accountCardButton , coachcard"
            onClick={(e) => handleSelect("Coach")}
          >
            <div className="accountCard">
              <img
                className="account__pic"
                src="https://i.imgur.com/pg0ZLwR.png"
                alt="logo"
                width="200"
              />
              <div className="account__title">Coach</div>
              <div className="account__desc">
                For coaches that want to see insights into potential players and
                see team insights
              </div>
            </div>
          </button>
        </div>
        <div className="fadeIn first">
          <button
            className="accountCardButton , scoutcard"
            onClick={(e) => handleSelect("Scout")}
          >
            <div className="accountCard">
              <img
                className="account__pic"
                src="https://i.imgur.com/pg0ZLwR.png"
                alt="logo"
                width="200"
              />
              <div className="account__title">Scout/Recruiter</div>
              <div className="account__desc">
                For scouts and recruiters that want to get scouting reports for
                potential telent and contact with players
              </div>
            </div>
          </button>
        </div>
        <div className="fadeIn first">
          <button
            className="accountCardButton , eventcard"
            onClick={(e) => handleSelect("Event Organizer")}
          >
            <div className="accountCard">
              <img
                className="account__pic"
                src="https://i.imgur.com/pg0ZLwR.png"
                alt="logo"
                width="200"
              />
              <div className="account__title">Event Organizer</div>
              <div className="account__desc">
                For event organizers to lookup and contact players to join their
                events
              </div>
            </div>
          </button>
        </div>
      </div>
      <div id="formFooter">
        <h5>Already a user?</h5>
        <Link to="/login" className="underlineHover login__signup">
          Login
        </Link>
      </div>
    </div>
  );
}
