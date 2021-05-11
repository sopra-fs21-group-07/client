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
  background: rgb(124, 124, 124, 1);
  transition: opacity 0.5s ease, transform 0.5s ease;
  margin-left: 10%;
`;

class PastTours extends React.Component {

    render(){
        return <ParallaxProvider>
            <Background></Background>
            <FormContainer>PAST TOURS</FormContainer>
            <Form>
                <PastTourInformationPage/> {/* aktuelle tours, button anklickbar, müsste noch geändert werden...? je nach dem, wie es als past tour gespeichert wird. */}
            </Form>
            <br></br>

        </ParallaxProvider>
    }
}

export default withRouter(PastTours);
