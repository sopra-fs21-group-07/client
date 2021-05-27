//#region 
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Spinner } from '../../views/design/Spinner';
import { api, handleError } from '../../helpers/api';
import Profile from '../../views/Profile';

import BookedTours from '../profilePage/BookedTours';


const ProfileContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  }
`;

const ProfileButton = styled.a`
  &:hover {
    transform: translateY(-2px);
  }
  padding: 9px;
  font-weight: 700;

  font-size: 13px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  width: ${props => props.width || null};
  height: 35px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid white;
  border-radius: 20px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  transition: all 0.3s ease;
  margin: 5px;

  align-items: center;
  justify-content: center;
  `;


const ButtonContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;



const EqualDivider = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  background: #333333;
  ${props => props.vertical && "flex-direction: column;"}

  > * {
    flex: 1;

    &:not(:first-child) {
      ${props => props.vertical ? "margin-top" : "margin-left"}: 1rem;
    }
  }
`;


const Child1 = styled.div`
  padding: 0.25rem 0.5rem;
  margin: 6px 0;
  border-radius: 6px;
  align-items: center;
  border: 1px solid #ffffff26;
  cursor: auto;  
  flex: 1 1 auto;
  background: #333333;

`;

const Child2 = styled.div`
  padding: 0.25rem 0.5rem;
  margin: 6px 0;
  border-radius: 6px;
  align-items: center;
  border: 1px solid #ffffff26;  
  flex: 2 1 auto;
  background: #333333;
`;
const Label = styled.h1`
  font-weight: bold;
  color: #ffffff;
`;


//#endregion

class ProfilePage extends React.Component {

  constructor() {
    super();
    this.state = {
      users: null
    };
  }

  edit() {
    this.props.history.push("/edit");
  }

  back() {
    localStorage.removeItem('profileID');
    this.props.history.push('/dashboard');
  }

  async componentDidMount() {
    try {
      const response = await api.get('/api/auth/profilePage/'+localStorage.getItem("username"));
      // delays continuous execution of an async operation for 1 second.
      // This is just a fake async call, so that the spinner can be displayed
      // feel free to remove it :)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Get the returned users and update the state.
      this.setState({ users: response.data });

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
      <EqualDivider>
        <style>{'body {background: #333333;}'}</style>
        <Child1>        
          <Label>Profile</Label>
        {!this.state.users ? (
          <Spinner />
        ) : (
          <div>

            <ProfileContainer>
              <Profile user={this.state.users}/>
            </ProfileContainer>
            <ButtonContainer>
            <ProfileButton
              width="25%"
              onClick={() => {
                this.edit();
              }}>
              Edit
            </ProfileButton>
            <ProfileButton
              width="25%"
              onClick={() => {
                this.back();
              }}>
              Back
            </ProfileButton>
            </ButtonContainer>
          </div>
        )}</Child1>
        <Child2>
          <Label>Tours</Label>
              <BookedTours/> {/*aber nur, wenn vom user gebucht*/}
            <br></br>
        </Child2>
      </EqualDivider>

    );
        }
}

export default withRouter(ProfilePage);
//<TourContainer>Here are all tours:</TourContainer>
