//#region
import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../../helpers/layout';
import { api, handleError } from '../../../helpers/api';
import { withRouter } from 'react-router-dom';
import { Button } from '../../../views/design/Button';
import GeoAdmin from '../../geoAdminMap/GeoAdmin';
import Background from "../../backgrounds/Background";
import PastTourInformationPage from '../../pastTours/PastTourInformationPage';
import {ParallaxProvider} from "react-scroll-parallax";
import logo1 from '../dummyPics/Everest.jpg';
import Tour from '../../pastTours/PastTours';
import Modal from '../ModalBookTour';
import {PastTourInformation, PastTourInformationSmall} from '../../pastTours/PastTourInformation';

import {Image} from "cloudinary-react";


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


const ButtonContainer = styled.div`
  justify-content: center;
  margin-top: 40px;
  margin-right: 200px;
  width: 200px;
  float: right;
  top: -20%;
  right: 20;
`;

const ButtonContainer2 = styled.div`
  justify-content: center;
  margin-top: 40px;
  margin-left: 200px;
  width: 200px;
  float: left;
  top: -20%;
  right: 20;
`;

const TourContainer = styled.li`
  color: white;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
  margin-right: 50px;
`;

const mainStyle = {
	button: {
		backgroundColor: "#408cec",
		border: 0,
		padding: "12px 20px",
		color: "#fff",
		margin: "0 auto",
		width: 150,
		borderRadius: 10,
	}
};

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
class ProfilePagePastTour extends React.Component {

  constructor() {
    super();
    this.state = {
      tourNUM: null,
      currentTour: 0,
      currentImg: logo1,
      isOpen: false,
      curr: null,
      id: 0,
      explicitTour: null,
    };
  }


  async componentDidMount() {
    try {
      const response = await api.get('/pastTours/'+localStorage.getItem("tourID"));
      this.setState({explicitTour: response.data})


      this.setState({tourNUM: parseFloat(localStorage.getItem("tourID"))});
      //localStorage.removeItem("tourID");

      // This is just some data for you to see what is available.
      // Feel free to remove it.
      console.log('request to:', this.state.explicitTour);

      // See here to get more data.
      console.log(response);
    } catch (error) {
      alert(`Something went wrong while fetching the users: \n${handleError(error)}`);
    }
  }

  toggleState = (clickedTour, clickedImage) => {
    this.setState({
      isOpen: !this.state.isOpen,
      currentTour: clickedTour,
      currentImg: clickedImage,
      curr: this.state.tourList[clickedTour],
    });
  }


  back() {
    localStorage.removeItem("tourID");
    this.props.history.push('/pastTours');
  }

  render() {
    const exTour = this.state.explicitTour;
    let info;
    let tourName;
    let picId
    if (exTour != null){
        info = <PastTourInformationSmall Tour={this.state.explicitTour}/>
        tourName = info.props.Tour.name
        picId = info.props.Tour.tourPictureKey
      }
      else{
        info = <div></div>
      }
        return <ParallaxProvider>
          <style>{'body { background-color: #333333; }'}</style>
            <Background></Background>
            <FormContainer>Tour: {tourName}</FormContainer>
            <ButtonContainer2><Button width="100%" onClick={() => {  this.back(); }}>Back</Button></ButtonContainer2>
              <ButtonContainer>
                <Button width="100%" onClick={() => {  this.props.history.push('/chat'); }}>Go to Chat</Button>
              </ButtonContainer>


            <Form>
              <TourContainer>

         <Image cloudName="sopra-group-7" publicID= {picId}
            width='200px' height='200px' />

                {info}

              </TourContainer>
            </Form>
            <br></br>

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
export default withRouter(ProfilePagePastTour);
