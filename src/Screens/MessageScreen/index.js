import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Permissions, SMS, Contacts, AuthSession } from 'expo';

export default class MessageScreen extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi from messages</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
