import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableHighlight } from 'react-native';
import { Permissions, SMS, Contacts, AuthSession } from 'expo';
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../lib';

class GroupScreen extends React.Component {

  constructor() {
    super();
    this.state = {
        groupData:[]
    }
  }
  
  componentDidMount() {
    this.props.requestToken();
  }
  
  componentDidUpdate() {
        const { user, token, chats, groups } = this.props
        if(token && Object.keys(user).length === 0) {
            this.props.requestUser(token)
        }
        if(Object.keys(user).length>1 && chats.length === 0 && !this.tryChats) {
            this.tryChats = true;
            this.props.requestChats(token)
        }
        if(Object.keys(user).length>1 && groups.length === 0 && !this.tryGroups) {
            this.tryChats = true;
            this.props.requestGroups(token)
        }
  }
  
  
  render() {
    
    return (
      <View>        
        <FlatList
          style = {{ width: '100%' }}
          keyExtractor = {( item, index ) => index }
          data = { this.props.groups }
          renderItem = {({ item, index }) => 
              <View style = { styles.item }>
                  <TouchableHighlight
                     style={styles.button}
                     onPress={_ => this.props.navigation.navigate("Messages", {type:"group", id:item.id})}
                  >
                     <Text> { item.name } </Text>
                  </TouchableHighlight>
                  
              </View>
          }
        />
        
      </View>
      
    );
  }
}

//any page with this command can access these.
export default connect(s => ({ user: s.user_data, token:s.groupme_token.access_token, groups:s.chat_groups, messages: s.messages, chats:s.direct_chatrooms }), mapDispatchToProps)(GroupScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
      margin: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
