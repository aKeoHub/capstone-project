import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import EventService from './EventService/EventService';

function EventModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Event
      </Button>

       <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="eventName">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control
                      type="eventName"
                      placeholder="Enter Event Name"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="description"
                    >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="Description" rows={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="startDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                    type="startDate"
                    placeholder="Start Date"
                    autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="endDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                    type="endDate"
                    placeholder="End Date"
                    autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="location">
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                      type="location"
                      placeholder="Location"
                      autoFocus
                      />
                    </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
    </>
  );
}

export default EventModal;