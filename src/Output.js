import React, { Component, Fragment } from 'react';
import { PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const Output = ({document}) => {

    return (
      <Fragment>
        <PDFDownloadLink document={<MyDocument />} filename={'someBlah.pdf'}>
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </ PDFDownloadLink>
      </Fragment>
    );

}

export default Output;
