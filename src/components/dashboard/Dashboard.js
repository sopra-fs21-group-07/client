//#region 
import React from 'react';
import styled from 'styled-components';
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

const ButtonContainerLeft = styled.div`
  justify-content: right;
  margin-top: 40px;
  margin-right: 200px;
  width: 200px;
  margin-left: 20px;
  align-items: right;

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
