import { useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { getUser, logOut } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Nav from "../../components/Nav/Nav";
import HomePage from "../HomePage/HomePage";
import RegisterPage from "../RegisterPage/RegisterPage";
import UpgradePage from "../UpgradePage/UpgradePage";
import PaymentPage from "../PaymentPage/PaymentPage";
import Pricing from "../pricing";
import ProfileDetail from "../ProfilePage/ProfileDetail";
import Ranks from "../Ranks";
import Messages from "../Messages";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [step, setStep] = useState(1);
  const history = useHistory();
  function handleLogOut() {
    logOut();
    setUser(null);
  }
  async function handleUpdateUser(updatedUserData) {
    await setUser(updatedUserData);
    history.push("/");
  }
  return (
    <main className="app">
      <Nav
        user={user}
        setUser={setUser}
        handleLogOut={handleLogOut}
        setStep={setStep}
      />
      <>
        <Switch>
          <Route path="/login">
            <AuthPage setUser={setUser} />
          </Route>
          <Route path="/register">
            <RegisterPage
              user={user}
              setUser={setUser}
              handleUpdateUser={handleUpdateUser}
              step={step}
              setStep={setStep}
            />
          </Route>
          <Route path="/profile">
            <ProfilePage user={user} />
          </Route>
          <Route path="/messages">
            <Messages user={user} />
          </Route>
          <Route path="/profiledetail">
            <ProfileDetail user={user} />
          </Route>
          <Route path="/ranks">
            <Ranks user={user} />
          </Route>
          <Route path="/pricing">
            <Pricing user={user} />
          </Route>
          <Route path="/payment">
            <PaymentPage user={user} />
          </Route>
          <Route path="/upgrade">
            <UpgradePage user={user} handleUpdateUser={handleUpdateUser} />
          </Route>
          <Route path="/">
            <HomePage user={user} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </>
      {/* home page */}
      {/* registration page */}
      {/* payment page */}
      {/* link accounts page */}
      {/* rankings page */}
      {/* profile page */}
      {/* detailed profile page */}
      {/* message page */}
    </main>
  );
}
