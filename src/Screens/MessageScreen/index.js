import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView, Alert, Keyboard, FlatList } from 'react-native';
import { Permissions, SMS, Contacts, AuthSession } from 'expo';
import { Header } from 'react-navigation';
import { mapDispatchToProps } from '../../lib';
import { connect } from 'react-redux'

class MessageScreen extends React.Component {

  constructor() {
    super();
    this.state = {
        message: ''
    }
  }

  componentDidMount() {
    const { token, navigation } = this.props
    this.props.requestMessages(token, { id: navigation.state.params.id })
  }

  onSubmitButton(event){
    Alert.alert('Sent!', this.state.message) //creates an alert using the text you entered.
    this.textInput.clear() //Clears your sent message from the textInput.
    Keyboard.dismiss() //closes the keyboard while you aren't typing.
  }

  static navigationOptions = props => ({
    title: props.navigation.state.params.screenName
  })

  render() {

    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset = {Header.HEIGHT + 20}
        style={styles.mainWindow} behavior="padding">

        <FlatList style={styles.container}
         data={ this.props.messages ? (this.props.messages.messages || this.props.messages.direct_messages) : []}
          renderItem={({item}) =>
              <View key={item.id} style={[styles.messages, item.Sender === 'Me' ? styles.receivedMSG : styles.sentMSG]}>
              <Text>
                {item.text}
              </Text>
              </View>}
        />
      <View style={styles.textEntry}>
            <TextInput
                style={{padding: 10, flex: 2}}
                underlineColorAndroid="transparent"
                multiline={true}
                placeholder="Type here!"
                onChangeText={(value) => this.setState({message: value})}
                ref={input => { this.textInput = input }}
                    value={this.state.message}
            />
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <Button

                  onPress={this.onSubmitButton.bind(this)}

                  title="Send"
                />
            </View>
      </View>
    </KeyboardAvoidingView>
    );
  }
}

export default connect(s => ({ token:s.groupme_token.access_token, groups:s.chat_groups, messages: s.messages, chats:s.direct_chatrooms }), mapDispatchToProps)(MessageScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainWindow: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  textEntry: {
    backgroundColor: 'aliceblue',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
  },
  messages: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  sentMSG: {
    alignSelf: 'flex-end',
    backgroundColor: 'lightskyblue',
  },
  receivedMSG: {
    alignSelf: 'flex-start',
    backgroundColor: 'beige',
  },
});
