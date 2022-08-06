import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DocForm from './docForm';
import {AddDocumentButton} from "../../components/Button/AddDocumentButton";
import {Grid} from "@material-ui/core";


function DocModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

          <AddDocumentButton variant="primary" onClick={handleShow}>
            Add Document
          </AddDocumentButton>


       <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Document</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <DocForm />
              </Modal.Body>
            </Modal>
    </>
  );
}

export default DocModal;