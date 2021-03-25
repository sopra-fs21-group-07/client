import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { Button } from '../../views/design/Button';
import { api, handleError } from '../../helpers/api';



const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
`;

const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 1.0);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-align: center;
`;


const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
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

const ChangeButton = styled.a`
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
margin-bottom: 5px;
border: 0;
border-radius: 20px;
cursor: ${props => (props.disabled ? "default" : "pointer")};
opacity: ${props => (props.disabled ? 1 : 1)};
background: linear-gradient(to right, #2b5876, #4e4376);
transition: all 0.3s ease;
margin-left: 10px;
`;

const ButtonContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
`;



class Edit extends React.Component {

  constructor() {
    super();
    this.state = {
      username: null,
      birthday: null
    };
  }

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
  }

// Server: UserService - updateBirthday(id, birthday)
// @PutMapping("/users/{id}/username")
  async changeBirthday() {
    try {
      const response = await api.put("/users/"+localStorage.getItem("id")+"/birthday", this.state.birthday)
      alert("Success")
      this.props.history.push('/profilePage/'+localStorage.getItem("id"));
    } catch (error) {
      alert(`Something went wrong: \n${handleError(error)}`);
    }
  }

// Server: UserService - updateUsername(id, username)
//@PutMapping("/users/{id}/username")
async changeUsername() {
  try {
    const response = await api.put("/users/"+localStorage.getItem("id")+"/username", this.state.username)
    alert("Success")
    this.props.history.push('/profilePage/'+localStorage.getItem("id"));

  } catch (error) {
    alert(`Something went wrong: \n${handleError(error)}`);
  }
}

  // redirect to your profile page
  back() {
    this.props.history.push('/profilePage/'+localStorage.getItem("id"));
  }

  /**
   *  Every time the user enters something in the input field, the state gets updated.
   * @param key (the key of the state for identifying the field that needs to be updated)
   * @param value (the value that gets assigned to the identified state key)
   */
  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
  }


    render() {
        return (
          <Container>
            <Label>Birthday:</Label> 
            <br /> <br /> 
            <InputField
              placeholder="DD-MM-YYYY"
              onChange={e => {
                this.handleInputChange('birthday', e.target.value);
              }}
            />

            <ChangeButton
              width="20%"
              disabled={!this.state.birthday}
              onClick={() => {
                this.changeBirthday();
              }}>
              Change birthday
            </ChangeButton>
            <br /> <br /> 
            <Label>Username:</Label> 
            <br /> <br /> 
            <InputField
              placeholder="Change username" 
              onChange={e => {
                this.handleInputChange('username', e.target.value);

              }}
            />
            <ChangeButton
              width="25%"
              disabled={!this.state.username}
              onClick={() => {
                this.changeUsername();
              }}>
              Change username
            </ChangeButton>
            <br /> <br /> <br /> 
            <BackButton
              width="50%"
              onClick={() => {
                this.back();
              }}>
              Back
            </BackButton>
          </Container>
        );
      }
    }

    export default withRouter(Edit);
    
