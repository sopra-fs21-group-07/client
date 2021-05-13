//#region 
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Everest from "../Tour/dummyPics/Everest.jpg"
import rafael from "../home/TeamPictures/rafael.jpg"


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
`;


const Picture = styled.img`
height: 250px;
display: flex;
margin: 15px;
justify-content: center;
border-radius: 125px;
`;

const PictureContainer = styled.div`
display: flex;
justify-content: center;
`;

const Text = styled.h1`
  font-size: 20px;
  color: black;
  align-items: center;
  color: #303030;
`
const TextContainer = styled.div`
display: flex;
justify-content: center;
`;

const Title = styled.h1`
  font-size: 20px;
  color: black;
  align-items: center;
  color: #303030;
`


//#endregion
function OurTeam(){

return (
    <>
<EqualDivider>

    <Child1>
        <PictureContainer><Picture src={rafael}/></PictureContainer>
        <TextContainer><Title>Rafael Dubach</Title></TextContainer>
        <TextContainer><Text>Full Stack Developer</Text></TextContainer>
    </Child1>

    <Child1>
        <PictureContainer><Picture src={Everest}/></PictureContainer>
        <TextContainer><Title>Raphael Wäspi</Title></TextContainer>
        <TextContainer><Text>Full Stack Developer</Text></TextContainer>
    </Child1>

    <Child1>
        <PictureContainer><Picture src={Everest}/></PictureContainer>
        <TextContainer><Title>Dylan Baumgartner</Title></TextContainer>
        <TextContainer><Text>Full Stack Developer</Text></TextContainer>
    </Child1>

    <Child1>
        <PictureContainer><Picture src={Everest}/></PictureContainer>
        <TextContainer><Title>Layla Husselman</Title></TextContainer>
        <TextContainer><Text>Full Stack Developer</Text></TextContainer>
    </Child1>

    <Child1>
        <PictureContainer><Picture src={Everest}/></PictureContainer>
        <TextContainer><Title>Beat Furrer</Title></TextContainer>
        <TextContainer><Text>Full Stack Developer</Text></TextContainer>
    </Child1>

</EqualDivider>

    </>

);
}

export default withRouter(OurTeam);