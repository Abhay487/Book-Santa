import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import  {createDrawerNavigator} from "react-navigation-drawer";
import {AppTabNavigator} from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenu";


export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:"Home"
})  