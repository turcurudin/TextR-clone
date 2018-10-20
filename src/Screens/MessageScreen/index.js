import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView, Alert, Keyboard, FlatList } from 'react-native';
import { Permissions, SMS, Contacts, AuthSession } from 'expo';
import { Header } from 'react-navigation';

export default class MessageScreen extends React.Component {

  constructor() {
    super();
    this.state = {
        message: ''
    }
  }
  
  onSubmitButton(event){
    Alert.alert('Sent!', this.state.message) //creates an alert using the text you entered.
    this.textInput.clear() //Clears your sent message from the textInput.
    Keyboard.dismiss() //closes the keyboard while you aren't typing.
  }

  render() {
    return (
      <KeyboardAvoidingView 
        keyboardVerticalOffset = {Header.HEIGHT + 20}
        style={styles.mainWindow} behavior="padding">
        
        <FlatList style={styles.container} //I'm assuming that a FlatList is the optimal choice for displaying list of messages.
         data={[
            {key: 'This is a sample message', Sender: 'Me'},
            {key: 'This is a sample response', Sender: 'You'},
            {key: 'This is a sample message', Sender: 'Me'},
            {key: 'This is a sample response', Sender: 'You'},
            {key: 'This is a sample message', Sender: 'Me'},
            {key: 'This is a sample response', Sender: 'You'},
            {key: 'This is a sample message', Sender: 'Me'},
            {key: 'This is a sample response', Sender: 'You'},
            {key: 'This is a sample message', Sender: 'Me'},
            {key: 'This is a sample response', Sender: 'You'},
            {key: 'This is a sample message', Sender: 'Me'},
            {key: 'This is a sample response', Sender: 'You'}
          ]}
          renderItem={({item}) => 
              <View style={[styles.messages, item.Sender === 'Me' ? styles.receivedMSG : styles.sentMSG]}>
              <Text>
                {item.key}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainWindow: {
      flex: 1, 
      flexDirection: 'column', 
      justifyContent: 'flex-end'
  },
  textEntry: {
    backgroundColor: 'aliceblue', 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5
  },
  item: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messages: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  sentMSG: {
    alignItems: 'flex-start',
    backgroundColor: 'lightskyblue',
  },
  receivedMSG: {
    alignItems: 'flex-end',
    backgroundColor: 'beige',
  },
});
