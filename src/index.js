import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Permissions, SMS, Contacts, AuthSession } from 'expo';

const DISCORD_CLIENT_ID = "503187612509536266"
const DISCORD_CLIENT_SECRET = "C5TyTelyRU3Kv4A6MCrSULVzjtXutdeA"
const DISCORD_API_ENDPOINT = 'https://discordapp.com/api/v6'
const DISCORD_SCOPE = "messages.read identify"

function JSON_to_URLEncoded(element,key,list){
  var list = list || [];
  if(typeof(element)=='object'){
    for (var idx in element)
      JSON_to_URLEncoded(element[idx],key?key+'['+idx+']':idx,list);
  } else {
    list.push(key+'='+encodeURIComponent(element));
  }
  return list.join('&');
}

export default class App extends React.Component {

  async componentDidMount() {
    // /* Get Permissions */
    // const { permissions } = await Permissions.getAsync( Permissions.CONTACTS, Permissions.SMS, Permissions.NOTIFICATIONS )
    // const toAsk = Object.keys(permissions).filter( x => permissions[x].status !== "granted" )
    // if(toAsk.length > 0) await Permissions.askAsync(...toAsk)
    //
    //
    // /* Get Contacts List */
    // const { data } = await Contacts.getContactsAsync({
    //   fields: [Contacts.Fields.Name],
    // });
    //

  }

  async loginAsync() {
    const redirectUrl = AuthSession.getRedirectUrl();
    const codeResult = await AuthSession.startAsync({
      authUrl:
        `https://discordapp.com/api/oauth2/authorize` +
        `?client_id=${DISCORD_CLIENT_ID}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
        `&response_type=code`+
        `&scope=${encodeURIComponent(DISCORD_SCOPE)}`
    });
    if( codeResult.type !== "success" ) throw new Exception("Auth Token Error")
    const { code } = codeResult.params
    const tokenResult = await fetch( DISCORD_API_ENDPOINT + "/oauth2/token", {
      method: "POST",
      headers: {  "Content-Type": "application/x-www-form-urlencoded", },
      body: JSON_to_URLEncoded({
        'client_id': DISCORD_CLIENT_ID,
        'client_secret': DISCORD_CLIENT_SECRET,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': redirectUrl,
        'scope': DISCORD_SCOPE
      })
    })

    console.log( await tokenResult.text() )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to keep working on your app!</Text>
        <Text>{AuthSession.getRedirectUrl()}</Text>
        <Button title="Login" onPress={this.loginAsync.bind(this)} />
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
