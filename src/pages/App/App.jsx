import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Nav from "../../components/Nav/Nav";
import HomePage from "../HomePage/HomePage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="app">
      <Nav user={user} setUser={setUser} />
      <>
        <Switch>
          <Route path="/login">
            <AuthPage setUser={setUser} />
          </Route>
          <Route path="/profile">
            <ProfilePage user={user} />
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
