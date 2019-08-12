import React, { Component, Fragment } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import MyDocumentDOM from './MyDocumentDOM';
import Output from './Output';
import logo from './basic';

const App = () => {

  return (
    <Fragment>
      <MyDocumentDOM />
      <Output />
    </Fragment>
  );
}

export default App;
