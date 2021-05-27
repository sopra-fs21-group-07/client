//#region 
import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import Users from '../shared/models/User';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/design/Button';
import GeoAdmin from '../geoAdminMap/GeoAdmin';
import Background from "../backgrounds/Background";
import TourInformationPage from '../Tour/TourInformationPage';
import {ParallaxProvider} from "react-scroll-parallax";


const FormContainer = styled.div`
  margin-top: 2em;
  display: flex;
    font-size: 30px;
  flex-direction: column;
   align-items: left;
  margin-left: 20%;
  min-height: 200px;
  justify-content: center;
  color: white;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 600px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 10px;
  background: #333333;
  transition: opacity 0.5s ease, transform 0.5s ease;
  margin-left: 10%;
`;

const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 1.0);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

const Buttons = styled.div`
  float: right;
  top: -20%;
  right: 20;
  width: 200px;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  justify-content: center;
  margin-top: 40px;
  margin-right: 200px;
  width: 200px;
  float: right;
  top: -20%;
  right: 20;
`;

const ButtonContainerLeft = styled.div`
  justify-content: right;
  margin-top: 40px;
  margin-right: 200px;
  width: 200px;
  margin-left: 20px;
  align-items: right;

`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const HeaderImage = styled.img`

object-fit: cover;
width: 100%;
height: 100%;
position: fixed;
z-index: -1;
`;

const EqualDivider = styled.div`
  display: flex;
  padding: 1rem;
  background: #333333;
  ${props => props.vertical && "flex-direction: column;"}

  > * {
    flex: 1;

    &:not(:first-child) {
      ${props => props.vertical ? "margin-top" : "margin-left"}: 1rem;
    }
  }
`;


const Child1 = styled.div`
  padding: 0.25rem 0.5rem;
  margin: 6px 0;
  border-radius: 6px;
  align-items: center;
  cursor: auto;  
  flex: 1 1 auto;
  background: #333333;

`;


//#endregion


/**
 * Classes in React allow you to have an internal state within the class and to have the React life-cycle for your component.
 * You should have a class (instead of a functional component) when:
 * - You need an internal state that cannot be achieved via props from other parent components
 * - You fetch data from the server (e.g., in componentDidMount())
 * - You want to access the DOM via Refs
 * https://reactjs.org/docs/react-component.html
 * @Class
 */
class Dashboard extends React.Component {

    componentDidMount() {}

    render() {
        return <ParallaxProvider>
          <style>{'body { background-color: #333333; }'}</style>
            <Background></Background>
            <FormContainer>DASHBOARD</FormContainer>
            <center><GeoAdmin /></center>

            <ButtonContainerLeft>
                <Button width="100%" onClick={() => {  this.props.history.push('/newTour'); }}>Create new Tour</Button>
              </ButtonContainerLeft>
              
            <EqualDivider>
              <Child1>
              <TourInformationPage/>
              </Child1>
              </EqualDivider>

            {/*<Users>
              {this.state.users.map(user => {
                return (
                  <PlayerContainer key={user.token}
                  onClick={() => {
                    this.openUserProfile(user.token);
                  }}>
                    <Player user={user} />
                  </PlayerContainer>
                );
              })}
            </Users>*/}
            </ParallaxProvider>
    }
}



/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 *
 *
 * <Title style={{position: 'absolute', fontSize: 120, letterSpacing: 20, paddingLeft: 70, paddingTop: 200}}>Mountain App</Title>
 * This title made some problems

 */
export default withRouter(Dashboard);
