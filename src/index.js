import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Permissions, SMS, Contacts, AuthSession } from 'expo';
import Navigation from './router';

export default class App extends React.Component {

  render() {
    return (
      <Navigation />
    );
  }

}
