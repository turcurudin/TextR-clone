import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Permissions, SMS, Contacts, AuthSession } from 'expo';
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../lib';

export default class GroupScreen extends React.Component {

  constructor() {
    super();
    this.state = {
        groupData:[]
    }
  }
  
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>        
        <FlatList
          style = {{ width: '100%' }}
          keyExtractor = {( item, index ) => index }
          data = { params.Groups }
          renderItem = {({ item, index }) => 
              <View style = { styles.item }>
                  <Button title={ item.name } onPress = {_ => this.props.navigation.navigate("Messages", {group_id:item.id})} />
              </View>
          }
        />
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
      margin: 5,
  }
});
