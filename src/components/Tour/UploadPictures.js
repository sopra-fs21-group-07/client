//#region 
import Axios from "axios"
import {useState} from "react";
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/design/Button';
import styled from 'styled-components';
import {Image} from "cloudinary-react";
import { api, handleError } from '../../helpers/api';

const Label = styled.h1`
  font-weight: bold;
  color: #ffffff;
`;

const UploadContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const UploadButton = styled.a`
&:hover {
  transform: translateY(-2px);
}
padding: 3px;
font-weight: 700;

font-size: 13px;
text-align: center;
color: rgba(255, 255, 255, 1);
width: ${props => props.width || null};
height: 25px;
margin-top: 10px;
margin-bottom: 10px;
border: 1px solid white;
border-radius: 20px;
cursor: ${props => (props.disabled ? "default" : "pointer")};
opacity: ${props => (props.disabled ? 1 : 1)};
transition: all 0.3s ease;
margin: 5px;
`;

//#endregion
function UploadPictures(){

const [imageSelected, setImageSelected] = useState("")


const uploadImage = (files) => {
try{
  const formData = new FormData()
  formData.append("file", imageSelected)
  formData.append("upload_preset", "tourpictures")

  Axios.post(
  "https://api.cloudinary.com/v1_1/sopra-group-7/image/upload",
  formData
  ).then((response)=>{
  console.log(response);
  const tourPictureKey = response.data.public_id;
  console.log(tourPictureKey);
  localStorage.setItem("tourPictureKey", response.data.public_id);
  alert("Picture uploaded successfully")
  });

} catch (error) {
    alert(`Something went wrong: \n${handleError(error)}`);
  }
};

return (
    <>
    <UploadContainer>
        <input type="file"
        onChange={(event)=>{
        setImageSelected(event.target.files[0]);
        }
        }/>
        <ButtonContainer>
            <UploadButton onClick={uploadImage}>Upload</UploadButton>
        </ButtonContainer>
    </UploadContainer>
    {/* <Image cloudName="sopra-group-7" publicID="hfk2yrsqm880nkgjsr8q" width='200px' height='200px'/> */}
    </>

);
}

export default withRouter(UploadPictures);