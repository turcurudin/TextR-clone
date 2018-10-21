import React from 'react';
import { createStackNavigator, addNavigationHelpers,  } from 'react-navigation';
import { HomeScreen, MessageScreen, TestScreen, GroupScreen } from './Screens';

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Messages: {
    screen: MessageScreen
  },
  Test: {
    screen: TestScreen
  },
  Group: {
      screen: GroupScreen
  }
})
