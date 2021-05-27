//#region 
import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../../helpers/layout';
import { api, handleError } from '../../../helpers/api';
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
import Modal1 from "react-bootstrap/Modal"
import Button1 from "react-bootstrap/Button"
import Form1 from "react-bootstrap/Form"
import 'bootstrap/dist/css/bootstrap.min.css';

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
  color: #333333;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 700px;
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
    color: black;
  }
  border: none;
  border-radius: 5px;
  background: grey;
  color: black;
`;

const Label = styled.label`
  color: black;
`;


const ButtonContainer = styled.div`
  justify-content: center;
  margin-right: 200px;
  width: 200px;
  float: right;
  top: -20%;
  right: 10;
`;

const ButtonContainer2 = styled.div`
display: flex;
  justify-content: center;
  margin-top: 10px;
    margin-left: auto;
      width: 100%;

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
      explicitTour: null,
      currentTour: 0,
      currentImg: logo1,
      isOpen: false,
      curr: null,
      id: 0,
      creatorUsername: null,
      show: false,
      name: null,
      emptySlots: null,
    };
  }


  async componentDidMount() {
    try {
      const response = await api.get("/tours/"+localStorage.getItem("tourID"));
      this.setState({explicitTour: response.data})
      this.setState({creatorUsername: response.data.creatorUsername});

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
      currentTour: parseFloat(clickedTour),
      currentImg: clickedImage,
      curr: this.state.explicitTour,
    });
  }

  
  closeModal = () => {
    this.setState({ 
    },() => this.toggleState(this.state.currentTour, this.state.currentImg));    
  }

  // Go to booking site, current Tour ID starts at = 1 
  booktour = () => {
    this.closeModal();
    this.props.history.push('/confirmTour/' + (this.state.currentTour));
  }

  back() {
    localStorage.removeItem("tourID");
    this.props.history.push('/dashboard');
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
  }

  async deleteTour() {
    try {
      const response = await api.delete("/tours/" + localStorage.getItem("tourID"))
      alert("Tour deleted successfully!")
      this.props.history.push('/dashboard');
  
    } catch (error) {
      alert(`Something went wrong: \n${handleError(error)}`);
    }
  }


  async editName() {
    try {
      const requestBody = JSON.stringify({
        name: this.state.name,
      });
      const response = await api.put("/edit/name/" + localStorage.getItem("tourID"), requestBody)
      alert("Tour name changed successfully!")
  
    } catch (error) {
      alert(`Something went wrong: \n${handleError(error)}`);
    }
  }

  async editEmptySlots() {
    try {
      const requestBody = JSON.stringify({
        emptySlots: this.state.emptySlots,
      });
      const response = await api.put("/edit/emptySlots/" + localStorage.getItem("tourID"), requestBody)
      alert("Tour name changed successfully!")
  
    } catch (error) {
      alert(`Something went wrong: \n${handleError(error)}`);
    }
  }

  async cancelTour(){
    try{
      const response = await api.get("/tourMembers/" +localStorage.getItem("tourID") +"/"+ localStorage.getItem("username"))
      alert("You no longer join this tour.")
      this.props.history.push('/dashboard');
    }catch (error){
      alert(`Something went wrong \n${handleError(error)}`)
    }

  }

  render() {
      const exTour = this.state.explicitTour;
      let info;
      let tourName;
      let picId
      if (exTour != null){
        info = <TourInformationSmall Tour={this.state.explicitTour}/>
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
            <ButtonContainer><Button width="100%" onClick={() => {  this.back(); }}>Back</Button>

              </ButtonContainer>


            <Form>
              <TourContainer>
         <Image cloudName="sopra-group-7" publicID= {picId}
            width='200px' height='200px' />
            <ButtonContainer2>
                <Button width="100%" onClick={() => {  this.props.history.push('/chat'); }}>Go to Chat</Button>
            </ButtonContainer2>

                {info}
                <ButtonContainer2>
                  <Button width="50%" disabled={this.state.Tour?.numberofparticipants == 0} onClick={() => { this.toggleState( this.state.explicitTour.id, logo1); }}>book this tour</Button>
                <ButtonContainer2>

                </ButtonContainer2>
                  <Button width="50%" disabled={this.state.creatorUsername != localStorage.getItem("username")} onClick={() => {this.handleShow()}}>Edit</Button>

                </ButtonContainer2>
                </TourContainer>
            </Form>
            <br></br>


              <br></br>
              <Modal 
              isOpen={this.state.isOpen}
              booktour={this.booktour}
              onRequestClose={this.closeModal}
              tour={this.state.curr}
              // image={this.state.currentImg}
            >
            </Modal>

            <Modal1 show={this.state.show} onHide={() => {this.handleClose()}}>
            <Modal1.Header closeButton>
              <Modal1.Title>Edit your Tour</Modal1.Title>
            </Modal1.Header>
            <Modal1.Body>
              <Form1>
                <Form1.Group controlId="formBasicName">
                <Form1.Label>Name:</Form1.Label>
                <Form1.Control type="name" placeholder="Enter new Name" onChange={e => {
                this.handleInputChange('name', e.target.value);
              }}/>
                
                <Button1 variant="primary" type="submit" size="sm" onClick={() => {
                this.editName();}}>
                  Change Name
                </Button1>
                </Form1.Group><br></br>

                <Form1.Group controlId="formBasicEmptySlots">
                <Form1.Label>Empty Slots:</Form1.Label>
                <Form1.Control type="emptySlots" placeholder="Enter new number for empty slots" onChange={e => {
                this.handleInputChange('emptySlots', e.target.value);
              }}/>
                
                <Button1 variant="primary" type="submit" size="sm" onClick={() => {
                this.editEmptySlots();}}>
                  Change Number
                </Button1>
                </Form1.Group>
              </Form1>
            </Modal1.Body>
            <Modal1.Footer>

            <Button1 variant="danger" onClick={() => {this.deleteTour()}}>
                Delete Tour
              </Button1>

              <Button1 variant="secondary" onClick={() => {this.handleClose()}}>
                Close
              </Button1>
            </Modal1.Footer>
            </Modal1>
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
