import React from "react";
import styled from "styled-components";
import { Redirect, Route } from "react-router-dom";
import ProfilePage from "../../profilePage/ProfilePage";
import Edit from "../../edit/Edit";
import Chat from "../../chat/containers/Chat/Chat";
import AppChat from "../../chat/containers/Chat/AppChat";
import TourProfilePage from "../../Tour/profile/TourProfilePage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class GameRouter extends React.Component {
  render() {
    /**
     * "this.props.base" is "/app" because as been passed as a prop in the parent of GameRouter, i.e., App.js
     */
    return (
      <Container>
        <Route
          exact
          path={`${this.props.base}`}
          render={() => <Redirect to={`${this.props.base}/dashboard`} />}
        />
        
        <Route
          exact
          path={`${this.props.base}/profilePage/:username`} // oder müsste das {token}sein?
          render={() => <ProfilePage />}
        />

        <Route
          exact
          path={`${this.props.base}/edit`}
          render={() => <Edit />}
        />

        <Route
          exact
          path={`${this.props.base}/chat`} //keine Ahnung ob das notwendig ist...
          render={() => <AppChat />}
        />

        <Route
          exact
          path={`${this.props.base}/profilePage/:id`} //keine Ahnung ob das notwendig ist...
          render={() => <TourProfilePage />}
        />
        
      </Container>
    );
  }
}
/*
* Don't forget to export your component!
 */
export default GameRouter;
