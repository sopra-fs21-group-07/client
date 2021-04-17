import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/design/Button';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { Spinner } from '../../views/design/Spinner';
import { api, handleError } from '../../helpers/api';
import Profile from '../../views/Profile';
import Background from "../backgrounds/Background";


const Container = styled(BaseContainer)`
  color: white;
  text-align: left;

`;


const Users = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ProfileContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  }
`;

const BackButton = styled.a`
  all: unset;
  padding 5px;
  font-size: 13px;
  text-align: left;
  margin-top: 37px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  -webkit-text-fill-color: white;
  width: fit-content; 
  &::before {
    content: "< ";
  }

`;

const EditButton = styled.a`
  all: unset;
  padding 5px;
  font-size: 13px;
  text-align: left;
  margin-top: 37px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  -webkit-text-fill-color: white;
  width: fit-content; 
  cursor: ${props => (props.disabled ? "default" : "pointer")}; 
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  }
  &::before {
    content: "<";
  }
  &::after {
    content: ">";
  }
  margin-left: 10px;
  transition: all 0.3s ease;
`;



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
        <div>
          <style>{'body { background-color: grey; }'}</style>
      <Container>
        <h1>Profile</h1>
        {!this.state.users ? (
          <Spinner />
        ) : (
          <div>

            <ProfileContainer>
              <Profile user={this.state.users}/>
            </ProfileContainer>
            <br />

            <Button
              width="30%"
              disabled={localStorage.getItem("username") != this.state.users.username}
              onClick={() => {
                this.edit();
              }}>
              Edit
            </Button>
            <br /> <br />
            <Button
              width="30%"
              onClick={() => {
                this.back();
              }}>
              Back
            </Button>
          </div>
        )}
      </Container>
        </div>
    );
  }
}

export default withRouter(ProfilePage);
