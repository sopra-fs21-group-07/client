import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 6px 0;
  width: 400px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff26;
  cursor: auto;
`;

const Title = styled.div`
  font-weight: bold;
  color: #ffffff;
`;

const tour_info = styled.div`
  margin-left: auto;
  margin-right: 10px;
  font-weight: bold;
`;


/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const TourInformation = ({ tour }) => {
  return (
    <>
        <Container>
            <Title>ID:</Title>
            <tour_info>{tour.tourId}</tour_info>
        </Container>

        <Container>
            <Title>Date:</Title>
            <tour_info>{tour.date}</tour_info>
        </Container>

        <Container>
            <Title>Region:</Title>
            <tour_info>{tour.region}</tour_info>
        </Container>

        <Container>
            <Title>Type:</Title>
            <tour_info>{tour.tourType}</tour_info>
        </Container>

        <Container>
            <Title>Height gain:</Title>
            <tour_info>{tour.heightGain}</tour_info>
        </Container>

        <Container>
            <Title>Heigh loss:</Title>
            <tour_info>{tour.heightLoss}</tour_info>
        </Container>

        <Container>
            <Title>Startpoint:</Title>
            <tour_info>{tour.startPoint}</tour_info>
        </Container>

        <Container>
            <Title>Endpoint:</Title>
            <tour_info>{tour.endPoint}</tour_info>
        </Container>

        <Container>
            <Title>Waypoints:</Title>
            <tour_info>{tour.waypoints}</tour_info>
        </Container>

        <Container>
            <Title>Distance:</Title>
            <tour_info>{tour.distance}</tour_info>
        </Container>

        <Container>
            <Title>Time:</Title>
            <tour_info>{tour.time}</tour_info>
        </Container>

        <Container>
            <Title>Description:</Title>
            <tour_info>{tour.description}</tour_info>
        </Container>

        <Container>
            <Title>Number of participants:</Title>
            <tour_info>{tour.numberofparticipants}</tour_info>
        </Container>

        <Container>
            <Title>Costs:</Title>
            <tour_info>{tour.cost}</tour_info>
        </Container>

    </>
  );
};

export default TourInformation;

