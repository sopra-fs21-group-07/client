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
  background: white;
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
  font-size: 20px;
  color: #303030;
  align-items: center;
  align-content: center;
  text-align: justify;
`
const TextContainer = styled.div`
display: flex;
justify-content: center;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #303030;
  align-items: center;
  align-content: center;
  text-align: justify;
`


//#endregion
function AboutUs(){

return (
    <>
<EqualDivider>
    <Child1>
        <TypeWriterEffect
            startDelay={100}
            cursorColor="black"
            text="Welcome!"
            typeSpeed={100}
          />
        <TextContainer>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue 
            duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,</Text>
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