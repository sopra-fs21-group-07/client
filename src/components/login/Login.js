//#region 
import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/design/Button';

const FormContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 700px;
  justify-content: center;
  background: #333333;
  `;

const BackgroundBase = styled.div`
background: #333333;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 775px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 5px;
  background: #333333;
  transition: opacity 0.5s ease, transform 0.5s ease;
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
`;

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

//#endregion
/**
 * Classes in React allow you to have an internal state within the class and to have the React life-cycle for your component.
 * You should have a class (instead of a functional component) when:
 * - You need an internal state that cannot be achieved via props from other parent components
 * - You fetch data from the server (e.g., in componentDidMount())
 * - You want to access the DOM via Refs
 * https://reactjs.org/docs/react-component.html
 * @Class
 */
class Login extends React.Component {
  /**
   * If you don’t initialize the state and you don’t bind methods, you don’t need to implement a constructor for your React component.
   * The constructor for a React component is called before it is mounted (rendered).
   * In this case the initial state is defined in the constructor. The state is a JS object containing two fields: name and username
   * These fields are then handled in the onChange() methods in the resp. InputFields
   */
  constructor() {
    super();
    this.state = {
      email: null,
      username: null,
      password: null
    };
  }
  /**
   * HTTP POST request is sent to the backend.
   * If the request is successful, a new user is returned to the front-end
   * and its token is stored in the localStorage.
   */

  async login() {
    try {
      const requestBody = JSON.stringify({
        username: this.state.username,
        password: this.state.password
      });
      const token = await api.post("/api/auth/login", requestBody);

        // Store the token into the local storage.
        localStorage.setItem('token', token.data.refreshToken);
        localStorage.setItem('authenticationToken', token.data.authenticationToken)
        localStorage.setItem('username', this.state.username);
        localStorage.setItem("tourPictureKey", "sampleTourPicture");
        //localStorage.setItem('token', response.data.token);

        // Login successfully worked --> navigate to the route /game in the GameRouter
        this.props.history.push(`/dashboard`);
        window.location.reload(); //otherwise our menu doesnt update

    } catch (error) {
      alert(`Bad Credentials: Are you registered yet? Please register yourself first :-)`);
    }
  }



register() {
    this.props.history.push('/registration');
  }

// logout() {
//     try {
//       //localStorage.removeItem('token');
//       this.props.history.push('/home');
//     } catch (error) {
//       alert("Somethin went wrong while logout");
//     }
//   }


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

  /**
   * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
   * Initialization that requires DOM nodes should go here.
   * If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
   * You may call setState() immediately in componentDidMount().
   * It will trigger an extra rendering, but it will happen before the browser updates the screen.
   */
  componentDidMount() {}

  render() {
    return (

<BackgroundBase>
<style>{'body { background-color: #33333; }'}</style>
      <BaseContainer>
      <br /> <br /> <br /> <br />
        <FormContainer>
          <Form>
          <br />
          <Title>Login</Title>
            <Label>Username</Label>
            <InputField
              placeholder="Enter here.."
              onChange={e => {
                this.handleInputChange('username', e.target.value);
              }}
            />

            <Label>Password</Label>
            <InputField
              placeholder="Enter here.."
              type="password"
              onChange={e => {
                this.handleInputChange('password', e.target.value);
              }}
            />
            <ButtonContainer>
              <Button
                disabled={!this.state.username || !this.state.password}
                width="50%"
                onClick={() => {
                  this.login();
                }}
              >
                Login
              </Button>
            </ButtonContainer>

            <ButtonContainer>
              <Button
                width="50%"
                onClick={() => {
                  this.register();
                }}
              >
                register
              </Button>
            </ButtonContainer>
            <br /><br />
          </Form>
        </FormContainer>
      </BaseContainer>
      </BackgroundBase>
    );
  }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 * 
 
 */
export default withRouter(Login);
