//#region 
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
import AboutUs from "../home/AboutUs"
import OurTeam from "../home/OurTeam"
import Technologies from "../home/Technologies"
import Everest from "../Tour/dummyPics/Everest.jpg"
import FadeIn from 'react-fade-in';

const NormalContainer = styled.div`
display: flex;
background: white;
${props => props.vertical && "flex-direction: column;"}

> * {
  flex: 1;
}
`;


const BoringContainer = styled.div`
  display: flex;
  color: black;
  padding-left: 40px;
  background: white;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #303030;
  align-items: center;
  align-content: center;
  text-align: justify;
`


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
class Home extends React.Component {

  componentDidMount() {}

  render() {
    return (
        <ParallaxProvider>
          {/* <Background></Background> */}
          {/* <FormContainer>WELCOME!</FormContainer> */}

            <NormalContainer>
              <AboutUs></AboutUs>
            </NormalContainer>

            <BoringContainer>
            <Title>Our Team</Title>
            </BoringContainer>

            <NormalContainer>
              <OurTeam></OurTeam>
            </NormalContainer>

            <BoringContainer>
            <Title>Technologies we used for this Project</Title>
            </BoringContainer>

            <NormalContainer>
              <Technologies></Technologies>
            </NormalContainer>

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
