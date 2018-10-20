import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Permissions, SMS, Contacts, AuthSession } from 'expo';
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../lib';

class HomeScreen extends React.Component {

  render() {
    const { token, groups, messages, chats } = this.props
    return (
      <View style={styles.container}>
        <Button title = "Go To Test Screen" onPress = { _ => this.props.navigation.navigate("Test")} />
      </View>
    );
  }
}

export default connect(s => ({ token:s.groupme_token.access_token, groups:s.chat_groups, messages: s.messages, chats:s.direct_chatrooms }), mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
