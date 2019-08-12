import React, { Component } from 'react';
import { Image, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import logo from './sample-logo.png';

const MyDocument = () => {
  const styles = StyleSheet.create({
    category: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '6pt'
    },
    header: {
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
      // height: '396pt',
      height: '792pt',
      padding: '10pt',
      // width: '306pt',
      width: '612pt'
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
      alignSelf: 'flex-end'
    }
  });

  return (
    <Document>
      <Page size="Letter" style={styles.page}>
        <View style={styles.row}>
          <View style={styles.header}>
            <Image style={styles.image} src={logo} />
          </View>
          <View style={styles.header}>
            <Text style={styles.textRight}>Candidate Profile Report</Text>
            <Text style={styles.textRight}>Some subtitle goes here.</Text>
            <Text style={styles.textRight}>Candidate: Jayne Mansfield</Text>
            <Text style={styles.textRight}>Assessment Date: 4/28/2019</Text>
          </View>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.textRight}>blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.textRight}>blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.textRight}>blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.textRight}>blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.textRight}>blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.textRight}>blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
        <View style={styles.category}>
          <Text>lorem ipsum blah blah blahlorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah lorem ipsum blah blah blah</Text>
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;
