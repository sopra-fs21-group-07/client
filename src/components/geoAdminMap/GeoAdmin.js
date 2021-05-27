import React from 'react';
import { api } from '../../helpers/api';

/**
 * Classes in React allow you to have an internal state within the class and to have the React life-cycle for your component.
 * You should have a class (instead of a functional component) when:
 * - You need an internal state that cannot be achieved via props from other parent components
 * - You fetch data from the server (e.g., in componentDidMount())
 * - You want to access the DOM via Refs
 * https://reactjs.org/docs/react-component.html
 * @Class
 */
class GeoAdmin extends React.Component {

  constructor(){
    super();
    this.state = {
      gistFileName: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await api.get('https://api.github.com/gists/d0367bda086c97514a541ebd1911ba38');
      console.log("Logging", response.data.files.sopra07.raw_url);
      this.setState( {gistFileName: response.data.files.sopra07.raw_url});
    } catch (error) {
      alert("Something went wrong while updating the gist file KML. ");
    }
  }

  render() {
    return (
        <iframe src={"https://map.geo.admin.ch/?lang=de&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=KML%7C%7C"+this.state.gistFileName+"&E=2695023.36&N=1176985.64&zoom=5&layers_visibility=true"}
        width='1200' height='400' frameBorder='0' ></iframe>
    );
  }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 * 
 * 
 * <Title style={{position: 'absolute', fontSize: 120, letterSpacing: 20, paddingLeft: 70, paddingTop: 200}}>Mountain App</Title>
 * This title made some problems 
 
 */
export default GeoAdmin;