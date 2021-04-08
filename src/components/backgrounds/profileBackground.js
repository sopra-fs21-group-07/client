import mountains from "../images/mountains.png";
import React from 'react';

export default class ProfileBackground extends React.Component{

    render(){
        return <div style={{
            backgroundImage: `url(${mountains})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '50%',
            position: 'fixed',
            zIndex: '-1'}}>


        </div>;
    }
}