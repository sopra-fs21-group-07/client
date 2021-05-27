 //#region 
 import React, { useState, useEffect } from 'react';
 import { withRouter } from 'react-router-dom';
 import { Button } from '../../views/design/Button';
 import styled from 'styled-components';
 import { BaseContainer } from '../../helpers/layout';
 import { Spinner } from '../../views/design/Spinner';
 import { api, handleError } from '../../helpers/api';
 import TourInformationSmall from '../Tour/TourInformation';
 import Background from '../backgrounds/Background';
import { ProgressBar } from './ProgressBar';

import './Modal.css'


 const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 1.0);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: none;
  border-radius: 5px;
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
   color: white;
   margin-bottom: 33px;
 `;

 const Form = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 50%;
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

 //#endregion
 function ApiProgress(props) {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(100), 100);
  }, []);

  return (
    <div className="App">
      <ProgressBar bgcolor={"green"} completed={completed} />
    </div>
  );
}
 
 class ConfirmTour extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
         tourID: 1,
         email: null,
         percent: 0,
         progressBarVisible: false,
         timer: 0,
         tour: null,
     };
     this.findIDfromURL();
   }

   async findIDfromURL(){
       this.setState({
           tourID: this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf('/')+1),
       });
    }
 
   async reduceEmptySlots() {
    this.setState({
      progressBarVisible: true,
      percent: 100,
    });
    try {
      const requestBody = JSON.stringify({
        id: this.state.tourID,
        emailMember: this.state.email,
      });
      const response = await api.put('/tours/' + this.state.tourID, requestBody);
      console.log("REST response: ", response);
    } catch (error) {
      // If the tour has no empty slots the backend create an error message Forbitten
      alert("This tour is full. Please choose another one!");
      this.props.history.push('/dashboard');
    }
    this.changeToDashboard();
  }

  async changeToDashboard() {
    await new Promise(resolve => setTimeout(resolve, 1500));
    this.props.history.push('/dashboard');
      alert("You now join this tour")

  }

  async getCurrentTour(){
    try{
        const response = await api.get('/tours/'+this.state.tourID);
        // Get the returned users and update the state.
        //this.setState({ tour: response.data });
        // Random tours display on dashboard

        // This is just some data for you to see what is available.
        // Feel free to remove it.
        this.setState({ tour: response.data.summit });
      } catch (error) {
        alert(`Something went wrong while fetching the users: \n${handleError(error)}`);
      }
  }

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
  }

  async componentDidMount() {
    this.findIDfromURL();
    this.setState({percent: 0});
    this.getCurrentTour();
  }
 
   render() {
     this.getCurrentTour();
     return (
           <div>
            <Background></Background>
            <br></br>
           <center><Form>
             <Title>Submit to this tour => {this.state.tour}</Title>
             <Label>Enter your email adress</Label>
              <InputField
                placeholder="Enter here.."
                type="email"
                onChange={e => {
                  this.handleInputChange('email', e.target.value);
                }}
              />
             <ButtonContainer>
               <Button
                 disabled={!this.state.email}
                 width="50%"
                 onClick={() => { this.reduceEmptySlots(); }}
               >
                 Submit
               </Button>
             </ButtonContainer>
             {this.state.progressBarVisible ? (<ApiProgress value={this.state.percent}/>) : (null)}
             </Form></center>
           </div>  
     );
   }
 }
 
 export default withRouter(ConfirmTour);