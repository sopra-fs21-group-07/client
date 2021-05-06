//#region 
import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../../helpers/layout';
import { api, handleError } from '../../../helpers/api';
import Users from '../../shared/models/User';
import { withRouter } from 'react-router-dom';
import { Button } from '../../../views/design/Button';
import GeoAdmin from '../../geoAdminMap/GeoAdmin';
import Background from "../../backgrounds/Background";
import TourInformationPage from '../../Tour/TourInformationPage';
import {ParallaxProvider} from "react-scroll-parallax";
import logo1 from '../dummyPics/Everest.jpg';
import Tour from '../../shared/models/Tour';
import Modal from '../ModalBookTour';
import {TourInformation, TourInformationSmall} from '../../Tour/TourInformation';


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
class TourProfilePage extends React.Component {

  constructor() {
    super();
    this.state = {
      tourList: [],
      tourNUM: null,
      allTours: null,
      currentTour: 0,
      currentImg: logo1,
      isOpen: false,
      curr: null,
      id: 0,
    };
  }


  async componentDidMount() {
    try {
      const response = await api.get('/tours');
      // delays continuous execution of an async operation for 1 second.
      // This is just a fake async call, so that the spinner can be displayed
      // feel free to remove it :)
      await new Promise(resolve => setTimeout(resolve, 500));

      // Get the returned users and update the state.
      this.setState({ allTours: response.data });
      // Create from the response tour objects
      this.generateTourList(response);

      this.setState({tourNUM: parseFloat(localStorage.getItem("tourID")-1)});
      //localStorage.removeItem("tourID");

      // This is just some data for you to see what is available.
      // Feel free to remove it.
      console.log('request to:', this.state.tourList[0]);

      // See here to get more data.
      console.log(response);
    } catch (error) {
      alert(`Something went wrong while fetching the users: \n${handleError(error)}`);
    }
  }

  generateTourList(response) {
    var tl = [];
    response.data.forEach(function(item){
      var singleTour = new Tour(item);
      tl.push(singleTour);
    });
    this.setState({ tourList: tl});
  }

  toggleState = (clickedTour, clickedImage) => {
    this.setState({ 
      isOpen: !this.state.isOpen, 
      currentTour: clickedTour,
      currentImg: clickedImage,
      curr: this.state.tourList[clickedTour],
    });
  }

  
  closeModal = () => {
    this.setState({ 
    },() => this.toggleState(this.state.currentTour, this.state.currentImg));    
  }

  // Go to booking site, current Tour ID starts at = 1 
  booktour = () => {
    this.closeModal();
    this.props.history.push('/confirmTour/' + (this.state.currentTour + 1));
  }

  back() {
    localStorage.removeItem("tourID");
    this.props.history.push('/dashboard');
  }

  render() {
      const tID = this.state.tourNUM;
      let info;
      let tourName;
      if (tID != null){
        info = <TourInformationSmall Tour={this.state.tourList[this.state.tourNUM]}/>
        tourName = info.props.Tour.name
      }
      else{
        info = <div></div>
      }
        return <ParallaxProvider>
            <Background></Background>
            <FormContainer>Tour: {tourName}</FormContainer>
            <ButtonContainer2><Button width="100%" onClick={() => {  this.back(); }}>Back</Button></ButtonContainer2>
              <ButtonContainer>
                <Button width="100%" onClick={() => {  this.props.history.push('/chat'); }}>Go to Chat</Button>
              </ButtonContainer>
              <Form>
              <TourContainer>
                <img src={logo1} width='200px' height='200px' />  
                {info}
                <center><button
                  style={{
                    ...mainStyle.button,
                    margin: 0,
                    width: "70%",
                    marginTop: 0,
                    cursor: "pointer"
                  }}
                  disabled={this.state.Tour?.numberofparticipants == 0} 
                  onClick={() => { this.toggleState( this.state.tourNUM, logo1); }}>
                  book this tour 
                </button></center>
              </TourContainer>
              </Form>
              <br></br> 
              <Modal 
              isOpen={this.state.isOpen}
              booktour={this.booktour}
              onRequestClose={this.closeModal}
              tour={this.state.curr}
              image={this.state.currentImg}
            >
            </Modal>
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
export default withRouter(TourProfilePage);
