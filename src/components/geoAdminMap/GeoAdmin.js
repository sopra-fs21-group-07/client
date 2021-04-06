import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { ImgContainer } from '../../helpers/layout';
import mountains from '../images/mountains1.jpg';
  


console.log(mountains); // /logo.84287d09.png



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

  componentDidMount() {}

  render() {
    return (
        <iframe src='https://map.geo.admin.ch/?lang=de&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege&layers_opacity=1,1,1,0.8&layers_visibility=false,false,false,false&layers_timestamp=18641231,,,&E=2688425.00&N=1175000.00&zoom=4' 
        width='1200' height='400' frameborder='0' ></iframe>
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