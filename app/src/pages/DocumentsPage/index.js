
import Image from './image';
import Types from './types';
import Heading from './heading';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function DocumentsPage() {
  return (
    <React.Fragment>
      <Image />
      <Heading />
      <Types />
    </React.Fragment>
  );
}

export default DocumentsPage;