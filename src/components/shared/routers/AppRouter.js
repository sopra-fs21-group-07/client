import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import Login from "../../login/Login";
import { GameGuard } from "../routeProtectors/GameGuard";
import GameRouter from "./GameRouter";
import ProfilePage from "../../profilePage/ProfilePage";
import Edit from "../../edit/Edit";
import Register from "../../login/Register";
import Home from "../../home/Home";

/**
 * Main router of your application.
 * In the following class, different routes are rendered. In our case, there is a Login Route with matches the path "/login"
 * and another Router that matches the route "/game".
 * The main difference between these two routes is the following:
 * /login renders another component without any sub-route
 * /game renders a Router that contains other sub-routes that render in turn other react components
 * Documentation about routing in React: https://reacttraining.com/react-router/web/guides/quick-start
 */
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route
              path="/home"
              exact
              render={() => (
                  <Home/>
              )}
            />
            <Route
              path="/game"
              render={() => (
                <GameGuard>
                  <GameRouter base={"/game"} />
                </GameGuard>
              )}
            />
            <Route
              path="/login"
              exact
              render={() => (
                <LoginGuard>
                  <Login />
                </LoginGuard>
              )}
            />
            <Route
              path="/profilePage/:id"
              exact
              render={() => (
                  <ProfilePage />
              )}
            />

              <Route
              path="/registration"
              exact
              render={() => (
              <Register />
              )}
            />

            <Route
              path="/edit"
              exact
              render={() => (
                <Edit />
              )}
            />
            <Route path="/" render={() => <Redirect to={"/login"} />} /> 
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
/*
* Don't forget to export your component! line 66 always throws you back to Login
 */
export default AppRouter;
