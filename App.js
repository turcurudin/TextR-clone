import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { Icon } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          darkTheme
          round
          inputStyle={{backgroundColor: 'white', width: 344}}
          platform="android"
          clearIcon='g-translate'
          placeholder='Search'
          placeholderTextColor='grey'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .158,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
