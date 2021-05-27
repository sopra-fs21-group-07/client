import React from 'react';
import { Button } from '../../views/design/Button';
import styled from 'styled-components';
import Background from '../backgrounds/Background';
import { BaseContainer } from '../../helpers/layout';
import { withRouter } from 'react-router-dom';
import GeoAdmin from '../geoAdminMap/GeoAdmin';
import PastTourInformationPage from '../pastTours/PastTourInformationPage';
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
  height: 500px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 10px;
  background: #333333;
  transition: opacity 0.5s ease, transform 0.5s ease;
  margin-left: 10%;
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

class PastTours extends React.Component {

    render(){
        return <ParallaxProvider>
            <style>{'body { background-color: #333333; }'}</style>

            <Background></Background>
            <FormContainer>PAST TOURS</FormContainer>
            <EqualDivider>
                <Child1>
                    <PastTourInformationPage/>
                </Child1>
            </EqualDivider>
            <br></br>

        </ParallaxProvider>
    }
}

export default withRouter(PastTours);
