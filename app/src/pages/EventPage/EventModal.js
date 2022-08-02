import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import EventService from './EventService/EventService';
import EventForm from './EventForm';
import {AddButtonEvent} from "../../components/Button/AddButtonEvent";


function EventModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

          <AddButtonEvent variant="primary" onClick={handleShow}>
            Add Event
          </AddButtonEvent>


       <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Event</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EventForm />
              </Modal.Body>
            </Modal>
    </>
  );
}

export default EventModal;