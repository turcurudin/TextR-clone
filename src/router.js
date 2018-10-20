import React from 'react';
import { createStackNavigator, addNavigationHelpers,  } from 'react-navigation';
import { HomeScreen, MessageScreen } from './Screens';

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Messages: {
    screen: MessageScreen
  }
})
