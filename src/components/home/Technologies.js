//#region 
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import GithubActions from "../home/TechPictures/GithubActions.png"
import GithubProjects from "../home/TechPictures/GithubProjects.png"
import gradle from "../home/TechPictures/gradle.png"
import heroku from "../home/TechPictures/heroku.png"
import javapersistence from "../home/TechPictures/javapersistence.png"
import javapicture from "../home/TechPictures/javapicture.png"
import jsx from "../home/TechPictures/jsx.png"
import npmpicture from "../home/TechPictures/npmpicture.png"
import reactpicture from "../home/TechPictures/reactpicture.png"
import sonarqube from "../home/TechPictures/sonarqube.png"
import spring from "../home/TechPictures/spring.png"
import cloudinaryPicture from "../home/TechPictures/cloudinaryPicture.png"
import lol from "../home/TechPictures/lol.png"
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


const TechPicture = styled.img`
height: auto;
max-height: 250px;
width: auto;
max-width: 250px;
justify-content: center;
`;



const PictureContainer = styled.div`
display: flex;
justify-content: center;
`;

const Text = styled.h1`
  font-size: 20px;
  color: black;
  align-items: center;
`
const TextContainer = styled.div`
display: flex;
justify-content: center;
`;


const BoringContainer = styled.div`

  color: black;
  background: white;
  flex-direction: column;
`;


//#endregion
function Technologies(){

return (
    <>
    <BoringContainer>
        
<FadeIn delay={300} transitionDuration={700}>
    <EqualDivider>
        <Child1>
            <PictureContainer><TechPicture src={GithubActions}/></PictureContainer>
        </Child1>

        <Child1>
            <PictureContainer><TechPicture src={GithubProjects}/></PictureContainer>
        </Child1>

        <Child1>
            <PictureContainer><TechPicture src={gradle}/></PictureContainer>
        </Child1>

        <Child1>
            <PictureContainer><TechPicture src={heroku}/></PictureContainer>
        </Child1>

        <Child1>
            <PictureContainer><TechPicture src={javapersistence}/></PictureContainer>
        </Child1>
    </EqualDivider>
</FadeIn>

<FadeIn delay={400} transitionDuration={700}>
    <EqualDivider>

        <Child1>
            <PictureContainer><TechPicture src={javapicture}/></PictureContainer>
        </Child1>

        <Child1>
            <PictureContainer><TechPicture src={jsx}/></PictureContainer>
        </Child1>

        <Child1>
            <PictureContainer><TechPicture src={npmpicture}/></PictureContainer>
        </Child1>

        <Child1>
            <PictureContainer><TechPicture src={reactpicture}/></PictureContainer>
        </Child1>

        <Child1>
            <PictureContainer><TechPicture src={sonarqube}/></PictureContainer>
        </Child1>

    </EqualDivider>
</FadeIn>

<FadeIn delay={500} transitionDuration={700}>
    <EqualDivider>

        <Child1>
            <PictureContainer><TechPicture src={spring}/></PictureContainer>
        </Child1>

        <Child1>
            <PictureContainer><TechPicture src={cloudinaryPicture}/></PictureContainer>
        </Child1>

        <Child1>
            <PictureContainer><TechPicture src={lol}/></PictureContainer>
        </Child1>

        <Child1>
            <PictureContainer><TechPicture src={lol}/></PictureContainer>
        </Child1>

        <Child1>
            <PictureContainer><TechPicture src={lol}/></PictureContainer>
        </Child1>

    </EqualDivider>
</FadeIn>

</BoringContainer>





    </>

);
}

export default withRouter(Technologies);