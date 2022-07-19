
import Image from './image';
import Types from './types';
import Heading from './heading';
import React from 'react';
import Docs from './otherDocs';
import 'bootstrap/dist/css/bootstrap.css';

function DocumentsPage() {
  return (
    <React.Fragment>
      <Image />
      <Heading />
      <Types />
      <Docs />
    </React.Fragment>
  );
}

export default DocumentsPage;