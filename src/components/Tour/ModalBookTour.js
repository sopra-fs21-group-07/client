import React from 'react';
import Modal from "react-modal";
import styled from "styled-components";
import {TourInformation} from './TourInformation';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';

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
    <a class="cross icon" title="cross" onClick={onRequestClose}></a>
    <br></br>
    <ImageStyle src={image}/>
    <TourInformation Tour={tour}></TourInformation>
    <center><Button width="50%" onClick={booktour}>Add me</Button></center>
  </Modal>
