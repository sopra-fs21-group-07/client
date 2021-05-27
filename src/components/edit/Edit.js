//#region 
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import { Button } from '../../views/design/Button';



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

const EditContainer2 = styled.div`
  margin: 6px 0;
  width: 400px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: auto;
  justify-content: center;
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
  margin-right: 10px;
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
transition: all 0.3s ease;
margin: 5px;
`;

const ButtonContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 12px;
  color: white;
  align-items: center;
  align-content: center;
  text-align: justify;
`

//#endregion

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




async editFirstName() {
  try {
    const requestBody = JSON.stringify({
      firstName: this.state.firstName,
    });
    const response = await api.put("/edit/firstName/" + localStorage.getItem("username"), requestBody)
    alert("Firstname changed successfully!")

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

async editUsername() {
  try {
    const requestBody = JSON.stringify({
      username: this.state.username,
    });
    const response = await api.put("/edit/username/" + localStorage.getItem("username"),requestBody)
    alert("Username changed successfully! Since you changed your username you cant edit your previously created tours anymore")
    localStorage.setItem('username', this.state.username);

  } catch (error) {
    alert(`Username already exists \n${handleError(error)}`);
  }
}



  // redirect to your profile page
  back() {
    this.props.history.push('/profilepage/:username');
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
<style>{'body { background-color: #333333; }'}</style>
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

            <Button 
            width="15%"
            disabled={!this.state.username}
              onClick={() => {
                this.editUsername();
              }}>
              edit
              </Button>

      </EditContainer>

      <EditContainer>
        <Title>Firstname:</Title>
        <InputField
              placeholder="Change firstname" 
              onChange={e => {
                this.handleInputChange('firstName', e.target.value);

              }}
            />

            <Button
            width="15%"
            disabled={!this.state.firstName}        
              onClick={() => {
                this.editFirstName();
              }}>
              edit
              </Button>

      </EditContainer>

      <EditContainer>
        <Title>Lastname:</Title>
        <InputField
              placeholder="Change lastname" 
              onChange={e => {
                this.handleInputChange('lastName', e.target.value);

              }}
            />

            <Button
            width="15%"        
            disabled={!this.state.lastName}          
              onClick={() => {
                this.editLastName();
              }}>
              edit
              </Button>

      </EditContainer>

      <EditContainer>
        <Title>Age:</Title>
        <InputField
              placeholder="Change age" 
              onChange={e => {
                this.handleInputChange('age', e.target.value);

              }}
            />

            <Button
            width="15%"       
            disabled={!this.state.age}           
              onClick={() => {
                this.editAge();
              }}>
              edit
              </Button>

      </EditContainer>

      <EditContainer>
        <Title>Region:</Title>
        <InputField
              placeholder="Change region" 
              onChange={e => {
                this.handleInputChange('region', e.target.value);

              }}
            />

            <Button
            width="15%"     
            disabled={!this.state.region}           
              onClick={() => {
                this.editRegion();
              }}>
              edit
              </Button>

      </EditContainer>


{/*       <EditButton
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
            </EditButton> */}
            <EditContainer2>
            <Button
            width="25%"              
              onClick={() => {
                this.back();
              }}>
              Back
              </Button>
            </EditContainer2>
            <EditContainer2>
            <Text>WARNING: If you change your username, you wont be able to work on your previously created tours anymore</Text>
            </EditContainer2>
    </BaseContainer>

    </MiddleContainer>

      </>
    
        );
      }
    }

    export default withRouter(Edit);
    
