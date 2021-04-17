import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import User from '../shared/models/User';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/design/Button';
import Background from "../backgrounds/Background";
//import { ImgContainer } from '../../helpers/layout';
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
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 500px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 10px;
  background: rgb(124, 124, 124, 1);
  transition: opacity 0.5s ease, transform 0.5s ease;
  margin-left:10%
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

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;
const Headerbutton = styled.button`
  color: white;
  margin-top: 10px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 1 : 1)};
  background: inherit; 
  border: 0;
  border-radius: 20px;
  `






/**
 * Classes in React allow you to have an internal state within the class and to have the React life-cycle for your component.
 * You should have a class (instead of a functional component) when:
 * - You need an internal state that cannot be achieved via props from other parent components
 * - You fetch data from the server (e.g., in componentDidMount())
 * - You want to access the DOM via Refs
 * https://reactjs.org/docs/react-component.html
 * @Class
 */
class Home extends React.Component {

  componentDidMount() {}

  render() {
    return (
        <ParallaxProvider>
          <Background></Background>
          <FormContainer>WELCOME!</FormContainer>
            <Form>Welcome :)</Form>
        </ParallaxProvider>
      // <ImgContainer>
      //
      // </ImgContainer>


    );
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
export default withRouter(Home);
