import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { Button } from '../../views/design/Button';
import { api, handleError } from '../../helpers/api';



const EditContainer = styled.div`
  margin: 6px 0;
  width: 400px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff26;
  cursor: auto;
`;

const MiddleContainer = styled.div`
  align-items: center;
  display: flex;
`;

const Title = styled.div`
  font-weight: bold;
  color: #ffffff;
`;

const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 1.0);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: auto;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-align: center;
  justify-content: right;
`; 


const Label = styled.h1`
  font-weight: bold;
  color: #ffffff;
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

const EditButton = styled.a`
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
opacity: ${props => (props.disabled ? 1 : 1)};
transition: all 0.3s ease;
margin: 5px;
`;

const ButtonContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;



class Edit extends React.Component {

  constructor() {
    super();
    this.state = {
      username: null,
      firstName: null,
      lastName: null,
      age: null,
      region: null
    }
  }

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
  }


async editUsername() {
  try {
    const requestBody = JSON.stringify({
      username: this.state.username,
    });
    const response = await api.put("/edit/username/" + localStorage.getItem("username"),requestBody)
    localStorage.setItem('username', this.state.username);
    alert("Username changed successfully")

  } catch (error) {
    alert(`Something went wrong: \n${handleError(error)}`);
  }
}

async editFirstName() {
  try {
    const requestBody = JSON.stringify({
      firstName: this.state.firstName,
    });
    const response = await api.put("/edit/firstName/" + localStorage.getItem("username"), requestBody)
    alert("Firstname changed successfully")

  } catch (error) {
    alert(`Something went wrong: \n${handleError(error)}`);
  }
}

async editLastName() {
  try {
    const requestBody = JSON.stringify({
      lastName: this.state.lastName,
    });
    const response = await api.put("/edit/lastName/" + localStorage.getItem("username"), requestBody)
    alert("Lastname changed successfully")

  } catch (error) {
    alert(`Something went wrong: \n${handleError(error)}`);
  }
}

async editAge() {
  try {
    const requestBody = JSON.stringify({
      age: this.state.age,
    });
    const response = await api.put("/edit/age/" + localStorage.getItem("username"), requestBody)
    alert("Age changed successfully")

  } catch (error) {
    alert(`Something went wrong: \n${handleError(error)}`);
  }
}

async editRegion() {
  try {
    const requestBody = JSON.stringify({
      region: this.state.region,
    });
    const response = await api.put("/edit/region/" + localStorage.getItem("username"), requestBody)
    alert("Region changed successfully")


  } catch (error) {
    alert(`Something went wrong: \n${handleError(error)}`);
  }
}


  // redirect to your profile page
  back() {
    this.props.history.push('/dashboard');
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

<>
<style>{'body { background-color: grey; }'}</style>
<br /> <br /><br /> 
<MiddleContainer>
    <BaseContainer>
    <Label>Edit</Label>

      <EditContainer>
        <Title>Username:</Title>
        <InputField
              placeholder="Change username" 
              onChange={e => {
                this.handleInputChange('username', e.target.value);


              }}
            />
      </EditContainer>

      <EditContainer>
        <Title>Firstname:</Title>
        <InputField
              placeholder="Change firstname" 
              onChange={e => {
                this.handleInputChange('firstName', e.target.value);

              }}
            />
      </EditContainer>

      <EditContainer>
        <Title>Lastname:</Title>
        <InputField
              placeholder="Change lastname" 
              onChange={e => {
                this.handleInputChange('lastName', e.target.value);

              }}
            />
      </EditContainer>

      <EditContainer>
        <Title>Age:</Title>
        <InputField
              placeholder="Change age" 
              onChange={e => {
                this.handleInputChange('age', e.target.value);

              }}
            />
      </EditContainer>

      <EditContainer>
        <Title>Region:</Title>
        <InputField
              placeholder="Change region" 
              onChange={e => {
                this.handleInputChange('region', e.target.value);

              }}
            />
      </EditContainer>

      <ButtonContainer>
      <EditButton
              width="25%"
              // disabled={!this.state.username}
              onClick={() => {
                if (this.state.firstName){
                  this.editFirstName();
                }
                if (this.state.lastName){
                  this.editLastName();
                }
                if (this.state.age){
                  this.editAge();
                }
                if (this.state.region){
                  this.editRegion();
                }
                if (this.state.username){
                  this.editUsername();
                }
              
              }}>
              Save
            </EditButton>

            <EditButton
            width="25%"              
              onClick={() => {
                this.back();
              }}>
              Back
              </EditButton>


            </ButtonContainer>

    </BaseContainer>
    </MiddleContainer>

      </>
    
        );
      }
    }

    export default withRouter(Edit);
    
