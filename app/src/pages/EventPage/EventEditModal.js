import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import EventService from './EventService/EventService';
import EventEditForm from './EventEditForm';
import {EditButtonEvent} from "../../components/Button/EditButtonEvent";

function EventEditModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <EditButtonEvent onClick={handleShow}>
        Edit
      </EditButtonEvent>

       <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Event</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EventEditForm />
              </Modal.Body>
            </Modal>
    </>
  );
}

export default EventEditModal;