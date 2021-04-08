import mountains from "../images/mountains2.png";
import React from 'react';

export default class Background extends React.Component{

    render(){
        return <div style={{
        backgroundImage: `url(${mountains})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '50%',
        position: 'fixed',
        marginTop: '-4em',
        zIndex: '-1'}}>


    </div>;
        }
}

