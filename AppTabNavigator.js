import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import BookDonateScreen from '../Screens/BookDonateScreen';
import BookRequestScreen from '../Screens/BookRequestScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks:{
    screen:BookDonateScreen, 
    navigationOptions:{
      tabBarIcon: <Image source = {require("../assets/request-list.png")} style = {{width:20, height:20}}/>,
      tabBarLabel: "Donate Books", 
    }
  },
  BookRequest:{
    screen:BookRequestScreen, 
    navigationOptions:{
      tabBarIcon: <Image source = {require("../assets/request-book.png")} style = {{width:20, height:20}}/>,
      tabBarLabel: "Request Books", 
    }
  }
})
