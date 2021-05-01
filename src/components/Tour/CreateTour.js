//#region 
/**
 * This is the place where a user can create a tour and has to give the specific information
 * 
 **/
import React from 'react';
import { Button } from '../../views/design/Button';
import styled from 'styled-components';
import { api, handleError } from '../../helpers/api';
import Background from '../backgrounds/Background';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import { tourtypeOptions } from './data/tourtypes';

const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 1.0);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
  margin-top: 20px;
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
  min-height: 250px;
  justify-content: center;
  color: white;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 600px;
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
class CreateTour extends React.Component {

  constructor() {
    super();
    this.state = {
      tourType: tourtypeOptions[0].value,
      name: null,
      summit: null,
      emptySlots: 0,
      myChoose: [],
      inputValue: '',
    };
  }

  /**
   * Load the possible option from the GeoAdmin Map
   * @param {UserInput from input field} inputValue 
   * @param {callback function} callback 
   */
  loadOptions = (inputValue, callback) => {
    const myList = this.searchTour(inputValue);
    myList.then((a) => {
      setTimeout(() => {
        callback(a);
      }, 1000);
    });
  };

  /**
   * Send information from the user input to the server and get the results and store in the state value
   * @param {User input from input field} inputValue 
   * @returns get the find summit list
   */
  async searchTour(inputValue) {
    if (inputValue.length >= 3){
      try {
        const requestBody = JSON.stringify({
          userInput: inputValue,
        });
        const response = await api.post('/nameGeoMapAdmin', requestBody);
        const summits = new Array();
        response.data.forEach(element => {
          let summit = {
            label: element.name,
            value: element.altitude.toString(),
          };
          summits.push(summit);
        });
        return summits;
      } catch (error) {
        alert("Something went wrong while fetching or /find? the geo.admin.ch data.");
      }
    }
    const dummySummit = new Array();
    dummySummit.push({ label: " Loading ", value: "0" });
    return dummySummit;
  }

  handelClick = (myChoose) => {
    this.setState({myChoose});
  }

  handelClickTourType = (tourType) => {
    this.setState({tourType});
  }

  /**
   * Save the userinput already in the state value
   */
  handleSelectChange = (newValue: string) => {
    const inputValue = newValue;
    this.setState({ inputValue });
  };

  /**
   * Send the tour data to the server
   * summitname and altitude identify the tour aim, so that the backend can find the coordinates and store the data in .kml file. 
   */
  async postTour() {
    try {
      const requestBody = JSON.stringify({
        type: this.state.tourType.value,
        name: this.state.name,
        summit: this.state.myChoose[0].label,
        altitude: this.state.myChoose[0].value,
        emptySlots: this.state.emptySlots,
      });
      console.log("REST request: ", requestBody);
      const response = await api.post('/tours', requestBody);
      this.props.history.push('/dashboard');

    } catch (error) {
      alert("Something went wrong while sending the tour informationen data to the server.");
    }
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
          <div>
          <Background></Background>
          <FormContainer>DASHBOARD</FormContainer>
          <center><Form>
            <Title>Create your mountain experience</Title>
            <Label>Titel</Label>
              <InputField
                placeholder="Enter here.."
                type="name"
                onChange={e => {
                  this.handleInputChange('name', e.target.value);
                }}
              />
            <Label>Tour type</Label>
            <Select
              defaultValue={tourtypeOptions[0]}
              options={tourtypeOptions}
              onChange={this.handelClickTourType}
            />
            <Label>Target: Summit</Label>
            <div>
              <AsyncSelect
                cacheOptions
                isMulti
                loadOptions={this.loadOptions}
                defaultOptions
                onInputChange={this.handleSelectChange}
                getOptionLabel={option => `${option.label}:  ${option.value} m a.s.l`}
                onChange={this.handelClick}
              />
            </div>
            <Label>Max. members of tour</Label>
              <InputField
                placeholder="Enter here.."
                type="emptySlots"
                onChange={e => {
                  this.handleInputChange('emptySlots', e.target.value);
                }}
              />
            <ButtonContainer>
              <Button
                width="50%"
                onClick={() => {
                  this.postTour();
                }}
              >
                Submit
              </Button>
            </ButtonContainer></Form></center>
            <br/><br/><br/><br/><br/><br/>
          </div>  
    );
  }
}

export default CreateTour;