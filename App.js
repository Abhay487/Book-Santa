import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Welcomescreen from './Screens/Welcomescreen';
import {AppTabNavigator} from './components/AppTabNavigator'
import {AppDrawerNavigator} from "./components/AppDrawerNavigator"

export default class App extends React.Component {
  render() {
    return (
      <View>
      <AppContainer/>
      </View>
    );
  }
}

const switchNavigator= createSwitchNavigator({
  Welcomescreen:{screen:Welcomescreen},
  Drawer:{screen:AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
