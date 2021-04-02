import "./Nav.css";
import * as userService from "../../utilities/users-service";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="nav">
      <div className="nav__company">
        <div className="nav__logo">
          <img src="https://i.imgur.com/pg0ZLwR.png" alt="logo" width={65} />
        </div>
        <div className="nav__name">
          <h3>LevelReady</h3>
          <p>Esports Ranking and Recruiting</p>
        </div>
      </div>
      <div className="nav__search">
        <SearchIcon className="nav__searchIcon" />
        <input className="nav__searchInput" type="text" placeholder="Search" />
      </div>
      <div className="nav__menu">
        <Link to="/">Player Ranks</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Contact</Link>
        <Link to="/">About</Link>
        {user ? (
          <Avatar
            className="avatar"
            src={user.avatar}
            alt={user.display_name}
          />
        ) : (
          <>
            <Link to="/login" className="nav__login">
              Login
            </Link>
            <Link to="/register" className="nav__register">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
