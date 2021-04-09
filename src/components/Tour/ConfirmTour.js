 import React from 'react';
 import { withRouter } from 'react-router-dom';
 import { Button } from '../../views/design/Button';
 import styled from 'styled-components';
 import { BaseContainer } from '../../helpers/layout';
 import { Spinner } from '../../views/design/Spinner';
 import { api, handleError } from '../../helpers/api';
 import TourInformation from '../Tour/TourInformation';
 import Background from '../backgrounds/Background';
 
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
 
 class ConfirmTour extends React.Component {
 
   constructor(props) {
     super(props);
     this.state = {
         tourID: 1,
     };
     this.findIDfromURL();
   }

   findIDfromURL(){
       this.setState({
           tourID: this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf('/')+1),
       });
   }
 
   async reduceEmptySlots() {
    try {
      const requestBody = JSON.stringify({
        id: this.state.tourID,
      });
      const response = await api.put('/tours/' + this.state.tourID, requestBody);
      console.log("REST response: ", response);
    } catch (error) {
      alert("Somethin went wrong while logout");
    }
  }
 
   render() {
     return (
           <div>
            <Background></Background>
            <br></br>
           <center><Form>
             <Title>Create your mountain experiance</Title>
             <ButtonContainer>
               <Button
                 disabled={!this.state.name || !this.state.summit}
                 width="50%"
                 onClick={this.reduceEmptySlots()}
               >
                 Submit
               </Button>
             </ButtonContainer></Form></center>
           </div>  
     );
   }
 }
 
 export default withRouter(ConfirmTour);