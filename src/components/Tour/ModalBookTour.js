import React from 'react';
import Modal from "react-modal";
import styled from "styled-components";
import {TourInformation} from './TourInformation';
import { Button } from '../../views/design/Button';

import './Modal.css'

const ImageStyle = styled.img`
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    border-radius: 6px;
`;


export default ({ isOpen, onRequestClose, tour, image, booktour}) =>
  <Modal
    isOpen={isOpen}
    ariaHideApp={false}
    onRequestClose={onRequestClose}
    contentLabel="Modal"
    className={{
      base: 'modal-base',
      afterOpen: 'modal-base_after-open',
      beforeClose: 'modal-base_before-close'
    }}
    overlayClassName={{
      base: 'overlay-base',
      afterOpen: 'overlay-base_after-open',
      beforeClose: 'overlay-base_before-close'
    }}
    shouldCloseOnOverlayClick={true}
    closeTimeoutMS={500}
  >
    <a className="cross icon" title="cross" onClick={onRequestClose}></a>
    <br></br>
    <ImageStyle src={image}/>
    <TourInformation Tour={tour}></TourInformation>
    <center>
      <Button width="20%" onClick={booktour}>Add me</Button>
      <span/> <span/> <span/>
      <Button width="20%" onClick={onRequestClose}>Back</Button>
    </center>
  </Modal>
