import React from 'react';
import { Button } from '../../views/design/Button';
import styled from 'styled-components';
import { api, handleError } from '../../helpers/api';
import Background from '../backgrounds/Background';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
//import { tourtypeOptions } from './data/tourtypes';//problem with import

import UploadPictures from '../Tour/UploadPictures';

import Axios from "axios"
import {useState} from "react";

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
//all imports of CreateTour

import { BaseContainer } from '../../helpers/layout';
import Users from '../shared/models/User';
import { withRouter } from 'react-router-dom';
import GeoAdmin from '../geoAdminMap/GeoAdmin';
import TourInformationPage from '../Tour/TourInformationPage';
import {ParallaxProvider} from "react-scroll-parallax";
//all imports of Dashboard

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
                <TourInformationPage/> {/* aktuelle tours, button anklickbar, müsste noch geändert werden...? je nach dem, wie es als past tour gespeichert wird. */}
            </Form>
            <br></br>

        </ParallaxProvider>
    }
}

export default withRouter(PastTours);
