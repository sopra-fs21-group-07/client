 //#region 
 import React, { useState, useEffect } from 'react';
 import { withRouter } from 'react-router-dom';
 import { Button } from '../../views/design/Button';
 import styled from 'styled-components';
 import { BaseContainer } from '../../helpers/layout';
 import { Spinner } from '../../views/design/Spinner';
 import { api, handleError } from '../../helpers/api';
 import TourInformation from '../Tour/TourInformation';
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
     };
     this.findIDfromURL();
   }

   findIDfromURL(){
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
      alert("Somethin went wrong while logout");
    }
    this.changeToDashboard();
  }

  async changeToDashboard() {
    await new Promise(resolve => setTimeout(resolve, 1500));
    this.props.history.push('/dashboard');
  }

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
  }

  async componentDidMount() {
    this.findIDfromURL();
    this.setState({percent: 0});
  }
 
   render() {
     return (
           <div>
            <Background></Background>
            <br></br>
           <center><Form>
             <Title>Summit to your tour</Title>
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