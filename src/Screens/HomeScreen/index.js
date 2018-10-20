import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Permissions, SMS, Contacts, AuthSession } from 'expo';

const GROUPME_OAUTH_ENDPOINT = 'https://oauth.groupme.com/oauth/authorize?client_id=HXvgT16M7fxfqCa7pGuzEfmXmjN6WguNfFK79gJkK2KUC30U'
const GROUPME_API_ENDPOINT = "https://api.groupme.com/v3"

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      groupme_token: null,
      groups:null,
    }
  }

  async loginAsync() {
    const redirectUrl = AuthSession.getRedirectUrl();
    const codeResult = await AuthSession.startAsync({
      authUrl: GROUPME_OAUTH_ENDPOINT
    });
    if( codeResult.type !== "success" ) throw new Exception("Auth Token Error")

    const groups = await fetch( GROUPME_API_ENDPOINT + "/groups", {
      headers: { "X-Access-Token" : codeResult.params.access_token }
    })

    this.setState({
      groupme_token: codeResult.params.access_token,
      groups: await groups.json()
    })


  }



  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to keep working on your app!</Text>
        <Text>{AuthSession.getRedirectUrl()}</Text>
        <Button title="Login" onPress={this.loginAsync.bind(this)} />
        <Button title="Message Screen" onPress={() => this.props.navigation.navigate("Messages")} />
        { this.state.groups && <Text>{JSON.stringify(this.state.groups)}</Text>}
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
