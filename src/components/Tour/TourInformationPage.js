import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/design/Button';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { Spinner } from '../../views/design/Spinner';
import { api, handleError } from '../../helpers/api';
import Tour from '../shared/models/Tour';
import TourInformation from '../Tour/TourInformation';
import logo1 from './dummyPics/Everest.jpg';
import logo2 from './dummyPics/Gokyo.jpg';
import logo3 from './dummyPics/Nepal.jpg';

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

// Number of Tours which displayed on the user dashboard
const NumOfDisplayedTours = 3;

class TourInformationPage extends React.Component {

  constructor() {
    super();
    this.state = {
      tourList: [],
      allTours: null,
      randNum: []
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

  booktour() {
      this.props.history.numberofparticipants = -1;
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

  render() {
    return (
      <Container>
        {!this.state.tourList[2] ? (
          <div>
            <Spinner />
            <p>create at least {NumOfDisplayedTours} new tours</p>
          </div>
        ) : (
          <div>
            {console.log("number: ", this.state.randNum)}
            <TourStyle>
              <TourContainer>
                <img src={logo1} width='200px' height='200px'/>  
                <TourInformation Tour={this.state.tourList[this.state.randNum[0]]}/>
                <Button
                  width="60%"
                  disabled={this.state.Tour?.numberofparticipants == 0} 
                  onClick={() => { this.booktour(); }}>
                  book this tour
                </Button>
              </TourContainer>
              <TourContainer>
                <img src={logo2} width='200px' height='200px'/> 
                <TourInformation Tour={this.state.tourList[this.state.randNum[1]]}/>
                <Button
                  width="60%"
                  disabled={this.state.Tour?.numberofparticipants == 0} 
                  onClick={() => { this.booktour(); }}>
                  book this tour
                </Button>
              </TourContainer>
              <TourContainer>
                <img src={logo3} width='200px' height='200px'/> 
                <TourInformation Tour={this.state.tourList[this.state.randNum[2]]}/>
                <Button
                  width="60%"
                  disabled={this.state.Tour?.numberofparticipants == 0} 
                  onClick={() => { this.booktour(); }}>
                  book this tour
                </Button>
              </TourContainer>
            </TourStyle>
          </div>

        )}
      </Container>  
    );
  }
}

export default TourInformationPage;
