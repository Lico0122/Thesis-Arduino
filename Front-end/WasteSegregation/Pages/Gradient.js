import React, {Component} from "react";
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image} from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import * as sp from "../shared/sp";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';


function post(url, parameters) {
    return new Promise((resolve, reject) => {
      var xhttp = new XMLHttpRequest();
      var queryString = Object.keys(parameters)
        .map((key) => key + "=" + parameters[key])
        .join("&");
  
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resolve(this.responseText);
        }
      };
  
      xhttp.open("POST", url, true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send(queryString);
    });
  }
  function get(url, parameters) {
    return new Promise((resolve, reject) => {
      var xhttp = new XMLHttpRequest();
      var queryString = Object.keys(parameters)
        .map((key) => key + "=" + parameters[key])
        .join("&");
  
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resolve(this.responseText);
        }
      };
  
      xhttp.open("GET", url + "?" + queryString, true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send(queryString);
    });
  }

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            info:[],
            PlasticWaste:"",
            PaperLeavesWaste:"",
            MetalWaste:"",
            WetWaste:"",
            plastic: 20,
            metal: "",
            wet: "",
            paper: "",
        }
    }
    try =()=>{
        this.props.navigation.navigate("Dashboard");
    }
    
    render(){
        return(
    
        <View style={styles.container}>
            <View style={{flexDirection:"row",}}>
            <AnimatedCircularProgress
                size={140}
                width={10}
                rotation={0}
                lineCap="round"
                fill={this.state.plastic}
                tintColor="#42f551"
                backgroundColor="#3d5875">
            {(image) => (
                <Image source={require("../assets/PlasticWaste.png")} style={{height:50, width:50,}}/>
            )}
            </AnimatedCircularProgress>
            <CircularProgressBase 
                radius={70}
                initialValue={this.state.plastic}
                activeStrokeColor={'#42f551'}
                activeStrokeSecondaryColor={'#c4f71b'}
                inActiveStrokeOpacity={0.2}
                inActiveStrokeWidth={6}>
                <Image source={require("../assets/PlasticWaste.png")} style={{height:50, width:50,}}/>
                <Text style={{color:"#42f551", fontSize: 20, fontWeight:"bold"}}>{this.state.PlasticWaste}%</Text>
            </CircularProgressBase>
            <sp.SizedBox width={40}/>
            <CircularProgressBase 
                radius={70}
                initialValue={this.state.PaperLeavesWaste}
                activeStrokeColor={'#42f551'}
                activeStrokeSecondaryColor={'#c4f71b'}
                inActiveStrokeOpacity={0.2}
                inActiveStrokeWidth={6}>
                <Image source={require("../assets/PaperWaste.png")} style={{height:50, width:50,}}/>
                <Text style={{color:"#42f551", fontSize: 20, fontWeight:"bold"}}>{this.state.PaperLeavesWaste}%</Text>
            </CircularProgressBase>
            </View>
            <sp.SizedBox height={10}/>
            <View style={{flexDirection:"row",}}>
                <View style={{width:140, alignItems:"center"}}>
                    <Text style={{ fontWeight:"600",}}>Plastic</Text>
                </View>
                <sp.SizedBox width={40}/>
                <View style={{width:140, alignItems:"center",}}>
                    <Text style={{ fontWeight:"600",}}>Paper and Leaves</Text>
                </View>
            </View>

            <sp.SizedBox height={50}/>
            
            <View style={{flexDirection:"row",}}>
            <CircularProgressBase 
                radius={70}
                initialValue={this.state.MetalWaste}
                activeStrokeColor={'#42f551'}
                activeStrokeSecondaryColor={'#c4f71b'}
                inActiveStrokeOpacity={0.2}
                inActiveStrokeWidth={6}>
                <Image source={require("../assets/MetalWaste.png")} style={{height:50, width:50,}}/>
                <Text style={{color:"#42f551", fontSize: 20, fontWeight:"bold"}}>{this.state.MetalWaste}%</Text>
            </CircularProgressBase>
            <sp.SizedBox width={40}/>
            <CircularProgressBase 
                radius={70}
                initialValue={this.state.WetWaste}
                activeStrokeColor={'#42f551'}
                activeStrokeSecondaryColor={'#c4f71b'}
                inActiveStrokeOpacity={0.2}
                inActiveStrokeWidth={6}>
                <Image source={require("../assets/WetWaste.png")} style={{height:50, width:50,}}/>
                <Text style={{color:"#42f551", fontSize: 20, fontWeight:"bold"}}>{this.state.WetWaste}%</Text>
            </CircularProgressBase>
            </View>
            <sp.SizedBox height={10}/>
            <View style={{flexDirection:"row",}}>
                <View style={{width:140, alignItems:"center"}}>
                    <Text style={{ fontWeight:"600",}}>Metal</Text>
                </View>
                <sp.SizedBox width={40}/>
                <View style={{width:140, alignItems:"center",}}>
                    <Text style={{ fontWeight:"600",}}>Wet Waste</Text>
                </View>
            </View>
            <View style={styles.subContainer}>
            <TouchableOpacity onPress={this.try} style={{height:38, width:45,}}>
                <ImageBackground source={require("../assets/ArrowBlackBTN.png")} style={{height:38, width:45,}}/>
            </TouchableOpacity>
        </View>
            
        </View>


        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        padding:20,
    },
    subContainer:{
        position: "absolute",
        alignSelf: "flex-end",
        bottom: 20,

        

    },
    
});