//#region 
import React from "react";
import styled from "styled-components";

const Container = styled.div`
margin: 6px 0;
width: 100%;
padding: 10px;
border-radius: 6px;
display: flex;
align-items: center;
border: 1px solid #ffffff26;
cursor: auto;
`;

const ContentField = styled.div`

  margin-left: auto;
  border: none;
  color: white;
  text-align: center;
  justify-content: right;
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


//#endregion
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
            <ContentField> {user.username} </ContentField>
        </Container>

        <Container>
            <Title>First Name:</Title>
            <ContentField> {user.firstName}</ContentField>
        </Container>

        <Container>
            <Title>Last Name:</Title>
            <ContentField> {user.lastName}</ContentField>
        </Container>

        <Container>
            <Title>Email:</Title>
            <ContentField> {user.email}</ContentField>
        </Container>

        <Container>
            <Title>Region:</Title>
            <ContentField> {user.region}</ContentField>
        </Container>

        <Container>
            <Title>Status:</Title>
            <ContentField>
            <user_info>{user.status}</user_info>
            {user.status === 'ONLINE'?
            <Online/>
            :
            <Offline/>
        }
        </ContentField>
        </Container>

    </>
  );
};

export default Profile;
