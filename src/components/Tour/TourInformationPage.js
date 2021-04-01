import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/design/Button';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { Spinner } from '../../views/design/Spinner';
import { api, handleError } from '../../helpers/api';
import TourInformation from '../../Tour/TourInformation';

import Tour from '../../models/Tour';

const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
`;

const Tour = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const TourContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;





class TourInformationPage extends React.Component {

  constructor() {
    super();
    this.state = {
      tour: null
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

  booktour(){
      this.props.history.numberofparticipants -1;
  }

  async componentDidMount() {
    try {
      const response = await api.get('/tours/'+localStorage.getItem("tourId"));
      // delays continuous execution of an async operation for 1 second.
      // This is just a fake async call, so that the spinner can be displayed
      // feel free to remove it :)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Get the returned users and update the state.
      this.setState({ tour: response.data });

      // This is just some data for you to see what is available.
      // Feel free to remove it.
      console.log('request to:', response.request.responseURL);
      console.log('status code:', response.status);
      console.log('status text:', response.statusText);
      console.log('requested data:', response.data);

      // See here to get more data.
      console.log(response);
    } catch (error) {
      alert(`Something went wrong while fetching the users: \n${handleError(error)}`);
    }
  }



  render() {
    return (
      <Container>

        {!this.state.tour ? (
          <Spinner />
        ) : (

          <div>
            <TourContainer>
              <Tour tour={this.state.tour}/>
            </TourContainer>

            <Button
              width="30%"
              disabled={this.state.Tour?.numberofparticipants == 0}
              onClick={() => {
                this.booktour();
              }}>
              Book Tour
            </Button>
          </div>

        )}
      </Container>  
    );
  }
}

export default withRouter(TourInformationPage);
