import React from "react";
import styled from "styled-components";
import logo from './dummyPics/Homer2.jpeg';

const Container = styled.div`
  margin: 6px 0;
  width: 200px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff26;
  cursor: auto;
  flex: 50%;

`;

const Title = styled.div`
  font-weight: bold;
  color: #ffffff;
  white-space: pre;
`;

const Tour_info = styled.div`
  margin-left: auto;
  
  margin-right: 10px;
  font-weight: bold;
`;

const ImgStyle = styled.div`
    width:100px;
    height:20px;       
`;


/**
 * Pay attention to the first line of the functional components, there are two ways to implement them
 * 1a. const CompName = ( { param1, param2 } ) => { return (console.log('Parameter: ', param1 )); }
 * 1b. const CompName = ( { props } ) => { return (console.log('Parameter: ', props.param1 )); }
 * 2. function CompName(props) { return ({console.log('Parameter: ', props.param1 )}); }
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const TourInformation = ( { Tour } ) => {
  return (
    <>  
        <Container>
            <Title>ID:</Title>
            <Tour_info>{Tour.id}</Tour_info>
        </Container>

        <Container>
            <Title>Name:</Title>
            <Tour_info>{Tour.name}</Tour_info>
        </Container>

        <Container>
            <Title>Summit:</Title>
            <Tour_info>{Tour.summit}</Tour_info>
        </Container>

        {/*<Container>
            <Title>Region:</Title>
            <Tour_info>{tour.region}</Tour_info>
        </Container>

        <Container>
            <Title>Type:</Title>
            <Tour_info>{tour.tourType}</Tour_info>
        </Container>

        <Container>
            <Title>Height gain:</Title>
            <Tour_info>{tour.heightGain}</Tour_info>
        </Container>

        <Container>
            <Title>Heigh loss:</Title>
            <Tour_info>{tour.heightLoss}</Tour_info>
        </Container>

        <Container>
            <Title>Startpoint:</Title>
            <Tour_info>{tour.startPoint}</Tour_info>
        </Container>

        <Container>
            <Title>Endpoint:</Title>
            <Tour_info>{tour.endPoint}</Tour_info>
        </Container>

        <Container>
            <Title>Waypoints:</Title>
            <Tour_info>{tour.waypoints}</Tour_info>
        </Container>

        <Container>
            <Title>Distance:</Title>
            <Tour_info>{tour.distance}</Tour_info>
        </Container>

        <Container>
            <Title>Time:</Title>
            <Tour_info>{tour.time}</Tour_info>
        </Container>

        <Container>
            <Title>Description:</Title>
            <Tour_info>{tour.description}</Tour_info>
        </Container>

        <Container>
            <Title>Number of participants:</Title>
            <Tour_info>{tour.numberofparticipants}</Tour_info>
        </Container>

        <Container>
            <Title>Costs:</Title>
            <Tour_info>{tour.cost}</Tour_info>
        </Container>*/}
    </>
  );
};

export default TourInformation;

