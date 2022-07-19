import NavBar from "./components/NavBar/NavBar";
import Image from './image';
import DocTypes from './docMainType';
import Heading from './heading';
import React from 'react';
import Docs from './otherDocs';
import 'bootstrap/dist/css/bootstrap.css';

function DocumentsPage() {
  return (
    <React.Fragment>
      <NavBar />
      <Image />
      <Heading />
      <DocTypes />
      <Docs />
    </React.Fragment>
  );
}

export default DocumentsPage;