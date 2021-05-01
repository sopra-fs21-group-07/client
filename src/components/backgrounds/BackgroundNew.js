import mountains from "../images/mountains2.png";
import React from 'react';


export const DESKTOP_WIDTH = 1160;
export const SMALL_LAPTOPS_WIDTH = 970;
export const TABLETS_WIDTH = 750;
export const SMALL_WIDTH = 768;

export default class Background extends React.Component{

    render(){
        return <div style={{
        backgroundImage: `url(${mountains})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '60%',
        position: 'fixed',
        marginTop: '-5em',
        zIndex: '-1'}}>


    </div>;
        }
}

