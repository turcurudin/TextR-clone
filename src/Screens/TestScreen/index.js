import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Permissions, SMS, Contacts, AuthSession } from 'expo';
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../lib';

class HomeScreen extends React.Component {

  render() {
    const { token, groups, messages, chats } = this.props

    const msgs = messages.messages || messages.direct_messages
    return (
      <View style={styles.container}>
        <Text>Open up App.js to keep working on your app!</Text>
        <Text>Groups{groups.length} Messages{msgs.length} Chats{chats.length}</Text>
        <Button title="Login" onPress={ _ => this.props.requestToken() } />
        <Button title="Message Screen" onPress={() => this.props.navigation.navigate("Messages")} />
        <Button title={this.props.token ? this.props.token : "Request Groups"} onPress={_ => this.props.requestGroups(token)} />
        <Button title={this.props.token ? this.props.token : "Request Chats"} onPress={_ => this.props.requestChats(token)} />
        <Button title={groups.length>0 ? groups[0].group_id : "Get Messages"} onPress={ _ => this.props.requestMessages(token, { id: groups[0].group_id })} />
        <Button title={chats.length>0 ? chats[0].other_user.id : "Get Messages"} onPress={ _ => this.props.requestMessages(token, { type:"chat", id: chats[0].other_user.id })} />
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
