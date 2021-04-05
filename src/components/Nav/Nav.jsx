import "./Nav.css";
import * as userService from "../../utilities/users-service";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function NavBar({ user, setUser, handleLogOut, setStep }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <div className="nav">
      <Link to="/" className="nav__company">
        <div className="nav__logo">
          <img src="https://i.imgur.com/pg0ZLwR.png" alt="logo" width={65} />
        </div>
        <div className="nav__name">
          <h3>LevelReady</h3>
          <p>Esports Ranking and Recruiting</p>
        </div>
      </Link>
      <div className="nav__search">
        <SearchIcon className="nav__searchIcon" />
        <input className="nav__searchInput" type="text" placeholder="Search" />
      </div>
      <div className="nav__menu">
        <Link to="/ranks">Player Ranks</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/">Contact</Link>
        <Link to="/">About</Link>
        {user ? (
          <div className="nav_menu">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Account
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/profile">Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/messages">My Messages</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/upgrade">Upgrade</Link>
              </MenuItem>
              <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>
          </div>
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
