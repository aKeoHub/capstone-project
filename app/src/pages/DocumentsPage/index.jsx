
import Image from './image';
import DocTypes from './docMainType';
import Heading from './heading';
import React from 'react';
import OtherDocs from './otherDocs';
import 'bootstrap/dist/css/bootstrap.css';

function DocumentsPage() {
  return (
    <React.Fragment>
    <Image />

      <Heading />
      <DocTypes />
      <OtherDocs />
    </React.Fragment>
  );
}

export default DocumentsPage;