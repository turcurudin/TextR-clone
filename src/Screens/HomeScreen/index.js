import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Permissions, SMS, Contacts, AuthSession } from 'expo';
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../lib';

const GROUPME_OAUTH_ENDPOINT = 'https://oauth.groupme.com/oauth/authorize?client_id=HXvgT16M7fxfqCa7pGuzEfmXmjN6WguNfFK79gJkK2KUC30U'
const GROUPME_API_ENDPOINT = "https://api.groupme.com/v3"

class HomeScreen extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to keep working on your app!</Text>
        <Text>{this.props.groups.length}</Text>
        <Button title="Login" onPress={ _ => this.props.requestToken() } />
        <Button title="Message Screen" onPress={() => this.props.navigation.navigate("Messages")} />
        <Button title={this.props.token ? this.props.token : "Request"} onPress={_ => this.props.requestGroups(this.props.token)} />
      </View>
    );
  }
}

export default connect(s => ({ token:s.groupme_token.access_token, groups:s.chat_groups }), mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
