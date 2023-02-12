import React from 'react';
import {View, StyleSheet, Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../screens/Home";
import Data from "../screens/Data";
import UserManual from "../screens/UserManual";
import AboutUs from "../screens/AboutUs";


const Tab = createBottomTabNavigator();

const Navigator = () => {


    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabNav}}>
                <Tab.Screen name='Home' component={Home} 
                    options={{tabBarIcon: ({focused}) => (
                            <View style={styles.tabIconContainer}>
                                <Image 
                                    source={require("../../assets/navIcon/home.png")}
                                    style={[styles.iconStyle,{tintColor: focused ? "#446129" : "#e8e8e8",}]}/>
                            </View>
                            )}}/>
                <Tab.Screen name='Data' component={Data}
                    options={{tabBarIcon: ({focused}) => (
                        <View style={styles.tabIconContainer}>
                            <Image 
                                source={require("../../assets/navIcon/data.png")}
                                style={[styles.iconStyle,{tintColor: focused ? "#446129" : "#e8e8e8",}]}/>
                        </View>
                        )}}/>
                <Tab.Screen name='UserManual' component={UserManual}
                    options={{tabBarIcon: ({focused}) => (
                        <View style={styles.tabIconContainer}>
                            <Image 
                                source={require("../../assets/navIcon/manual.png")}
                                style={[styles.iconStyle,{tintColor: focused ? "#446129" : "#e8e8e8",}]}/>
                        </View>
                        )}}/>
                <Tab.Screen name='AboutUs' component={AboutUs}
                    options={{tabBarIcon: ({focused}) => (
                        <View style={styles.tabIconContainer}>
                            <Image 
                                source={require("../../assets/navIcon/aboutus.png")}
                                style={[styles.iconStyle,{tintColor: focused ? "#446129" : "#e8e8e8",}]}/>
                        </View>
                        )}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;

const styles = StyleSheet.create({
    tabNav: {
        position: "absolute",
        backgroundColor: "#92A65F",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 30,
        height: 60,
        borderTopWidth: 0,

    },
    tabIconContainer: {
        alignItems:"center", 
        justifyContent:"center",
    },
    iconStyle: {
        height: 25,
        width: 25,
    }
})




