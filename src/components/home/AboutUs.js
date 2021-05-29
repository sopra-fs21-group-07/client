//#region 
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Everest from "../Tour/dummyPics/Everest.jpg"
import TypeWriterEffect from 'react-typewriter-effect';
import FadeIn from 'react-fade-in';


const EqualDivider = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  background: #333333:
  ${props => props.vertical && "flex-direction: column;"}

  > * {
    flex: 1;

    &:not(:first-child) {
      ${props => props.vertical ? "margin-top" : "margin-left"}: 1rem;
    }
  }
`;


const Child1 = styled.div`
  padding: 0.25rem 0.5rem;
  margin: 6px 0;
  border-radius: 6px;
  align-items: center;
  cursor: auto;  
  flex: 1 1 auto;
  color: white;
//   margin-top: 250px;
`;

const Child2 = styled.div`
  padding: 0.25rem 0.5rem;
  margin: 6px 0;
  border-radius: 6px;
  align-items: center;
  flex: 2 1 auto;
`;

const Picture = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 10px;
`;

const PictureContainer = styled.div`
display: flex;
justify-content: center;
`;

const Text = styled.h1`
  font-size: 15px;
  color: white;
  align-items: center;
  align-content: center;
  text-align: justify;
`
const TextContainer = styled.div`
display: flex;
justify-content: center;
`;



//#endregion
function AboutUs(){

return (
    <>
<EqualDivider>
    <Child1>
        <TypeWriterEffect
            startDelay={100}
            cursorColor="white"
            text="Welcome!"
            typeSpeed={100}
          />
        <TextContainer>
        <Text>The projects aim is to bring people on mountains together. 
          There are always people who want to go on a mountain tour but just cant find people who want to join them. That is why we created our mountain app.
          We are a team of 5 students from the university of zurich who are passionate about mountains. This project helped us a lot to gain insight on different
          technologies, different coding styles and teamwork. And by the way: Thank you Jan Willi for your support during this semester. 
            </Text>
        </TextContainer>
    </Child1>
    <Child2>
    <FadeIn delay={300} transitionDuration={700}>
        <PictureContainer><Picture src={Everest} /></PictureContainer>
    </FadeIn>
    </Child2>
</EqualDivider>
    </>

);
}

export default withRouter(AboutUs);