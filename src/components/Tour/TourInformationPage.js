import React from 'react';
import { Button } from '../../views/design/Button';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { Spinner } from '../../views/design/Spinner';
import { api, handleError } from '../../helpers/api';
import Tour from '../shared/models/Tour';
import {TourInformation, TourInformationSmall} from '../Tour/TourInformation';
import logo1 from './dummyPics/Everest.jpg';
import logo2 from './dummyPics/Gokyo.jpg';
import logo3 from './dummyPics/Nepal.jpg';
import Modal from './ModalBookTour';
import { withRouter } from 'react-router-dom';


const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
`;

const TourStyle = styled.ul`
  width: 100%;
  margin: 0 auto;
`;

const TourContainer = styled.li`
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

// Number of Tours which displayed on the user dashboard
const NumOfDisplayedTours = 3;

class TourInformationPage extends React.Component {

  constructor() {
    super();
    this.state = {
      tourList: [],
      allTours: null,
      randNum: [],
      currentTour: 0,
      currentImg: logo1,
      isOpen: false,
      curr: null,
      id: 0,
    };
  }

/** 
  edit() {
    this.props.history.push("/edit");
  }

  back() {
    this.props.history.push('/dashboard');
  }
  */

  /**
   * Method to choose a random Tour for the dashboard
   */
  chooseRandomNumber(tourListLength) {
    var list = [];
    const min = 0;
    const max = tourListLength;
    if (tourListLength >= NumOfDisplayedTours) {
      for (var i = 0; i < NumOfDisplayedTours; i++) {
        var rand = Math.floor(min + Math.random() * (max - min));
        var i
        // Check if the tour id is already in the list, then try another one.
        if (list.includes(rand))
          i--;
        else 
          list.push(rand);
      }
    }
    else {
      list = [0,0,0]
    }
    this.setState( { randNum: list } );
  }

  generateTourList(response) {
    var tl = [];
    response.data.forEach(function(item){
      var singleTour = new Tour(item);
      tl.push(singleTour);
    });
    this.setState({ tourList: tl});
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
      // Random tours display on dashboard
      this.chooseRandomNumber(response.data.length);
      // Create from the response tour objects
      this.generateTourList(response);

      // This is just some data for you to see what is available.
      // Feel free to remove it.
      console.log('request to:', this.state.tourList[0]);

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

  closeModal = () => {
    this.setState({ 
    },() => this.toggleState(this.state.currentTour, this.state.currentImg));    
  }

  booktour = () => {
    this.closeModal();
    this.props.history.push('/confirmTour/'+this.state.currentTour);
  }

  render() {
    const bg = {
      overlay: {
        background: "#FFFF00"
      }
    };

    return (
      <Container>
        {!this.state.tourList[2] ? (
          <div>
            <Spinner />
            <p>create at least {NumOfDisplayedTours} new tours</p>
          </div>
        ) : (
          <div>
            <TourStyle>
              <TourContainer>
                <img src={logo1} width='200px' height='200px'/>  
                <TourInformationSmall Tour={this.state.tourList[this.state.randNum[0]]}/>
                <center><button
                  style={{
                    ...mainStyle.button,
                    margin: 0,
                    width: "70%",
                    marginTop: 0
                  }}
                  disabled={this.state.Tour?.numberofparticipants == 0} 
                  onClick={() => { this.toggleState( this.state.randNum[0], logo1); }}>
                  book this tour
                </button></center>
              </TourContainer>
              <TourContainer>
                <img src={logo2} width='200px' height='200px'/> 
                <TourInformationSmall Tour={this.state.tourList[this.state.randNum[1]]}/>
                <center><button
                  style={{
                    ...mainStyle.button,
                    margin: 0,
                    width: "70%",
                    marginTop: 0
                  }}
                  disabled={this.state.Tour?.numberofparticipants == 0} 
                  onClick={() => { this.toggleState( this.state.randNum[1], logo2); }}>
                  book this tour
                </button></center>
              </TourContainer>
              <TourContainer>
                <img src={logo3} width='200px' height='200px'/> 
                <TourInformationSmall Tour={this.state.tourList[this.state.randNum[2]]}/>
                <center><button
                  style={{
                    ...mainStyle.button,
                    margin: 0,
                    width: "70%",
                    marginTop: 0
                  }}
                  disabled={this.state.Tour?.numberofparticipants == 0} 
                  onClick={() => { this.toggleState( this.state.randNum[2], logo3); }}>
                  book this tour
                </button></center>
              </TourContainer>
            </TourStyle>
            <Modal 
              isOpen={this.state.isOpen}
              booktour={this.booktour}
              onRequestClose={this.closeModal}
              tour={this.state.curr}
              image={this.state.currentImg}
            >
            </Modal>
          </div>

        )}
      </Container>  
    );
  }
}

export default withRouter(TourInformationPage);
