import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Permissions, SMS, Contacts, AuthSession } from 'expo';
import Navigation from './router';
import store from './store';
import { Provider } from 'react-redux'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }

}
