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




const Online = styled.span`
  color: #4caf50;
  &::after {
    content: "✔";
  }
  padding-right: 6px;
`;

const Offline = styled.span`
  color: #f44336;
  &::after {
    content: "✘";
  }
  padding-right: 6px;
`;

const EditField = styled.span`
  color: black;
  background-color: white;
  width: auto;
  padding: 0 6px;
  border-radius: 6px;   
`;

/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const Profile = ({ user }) => {
  return (
    <>
        <Container>
            <Title>Username:</Title>
            {user.username}
        </Container>

        <Container>
            <Title>First Name:</Title>
            {user.firstName}
        </Container>

        <Container>
            <Title>Last Name:</Title>
            {user.lastName}
        </Container>

        <Container>
            <Title>Email:</Title>
            {user.email}
        </Container>

        <Container>
            <Title>Region:</Title>
            {user.region}
        </Container>

        <Container>
            <Title>Status:</Title>
            <user_info>{user.status}</user_info>
            {user.status === 'ONLINE'?
            <Online/>
            :
            <Offline/>
        }
        </Container>

    </>
  );
};

export default Profile;
