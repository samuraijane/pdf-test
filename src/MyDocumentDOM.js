import React, { Component, Fragment } from 'react';
import { Image, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import logo from './sample-logo.png';

const MyDocumentDOM = () => {
  const styles = StyleSheet.create({
    category: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '6pt'
    },
    header: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column'
    },
    image: {
      height: '100pt',
      width: '100pt',
    },
    page: {
      background: 'cornsilk',
      display: 'block',
      height: '396pt',
      // height: '792pt',
      padding: '10pt',
      width: '306pt',
      // width: '612pt'
      // flexDirection: 'row'
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    sectionHeader: {
      backgroundColor: 'blue',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '14pt',
      padding: '14pt 4pt'
    },
    textRight: {
      textAlign: 'right'
    }
  });

  return (
    <Fragment>
      <div size="Letter" style={styles.page}>
        <div style={styles.row}>
          {/*<div>*/}
            <img style={styles.image} src={logo} />
          {/*</div>*/}
          <div style={styles.header}>
            <div style={styles.textRight}>Candidate Profile Report</div>
            <div style={styles.textRight}>Some subtitle goes here.</div>
            <div style={styles.textRight}>Candidate: Jayne Mansfield</div>
            <div style={styles.textRight}>Assessment Date: 4/28/2019</div>
          </div>
        </div>
        <div style={styles.sectionHeader}>
          <div style={styles.textRight}>blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.sectionHeader}>
          <div style={styles.textRight}>blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.sectionHeader}>
          <div style={styles.textRight}>blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.sectionHeader}>
          <div style={styles.textRight}>blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.sectionHeader}>
          <div style={styles.textRight}>blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.sectionHeader}>
          <div style={styles.textRight}>blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
        <div style={styles.category}>
          <div>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyDocumentDOM;
