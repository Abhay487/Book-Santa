import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import  {DrawerItems} from "react-navigation-drawer";
import firebase from "firebase";



export default class CustomSideBarMenu extends React.Component{

    render(){

        return(
            <View style={styles.container}>
                <View style = {styles.drawerItemsContainer}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style={styles.logOutContainer}>
                    <TouchableOpacity styles={styles.logOutButton}
                    onPress={()=>{
                        this.props.navigation.navigate("WelcomeScreen")
                        firebase.auth().signOut()
                    }}>
                        <Text>LogOut</Text>
                    </TouchableOpacity>
                </View>
                <Text> Custom Side Bar Menu</Text>
            </View>
        )
    }
}





var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })