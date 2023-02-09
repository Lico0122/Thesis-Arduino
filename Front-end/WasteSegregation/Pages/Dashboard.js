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
            info: [],
            PlasticWaste: "",
            MetalWaste: "",
            WetWaste: "",
            PaperLeavesWaste: "",
            barColorPlastic:"",
            barColorMetal:"",
            barColorPaper:"",
            barColorWet:"",
            
        }
    }
    init=async()=>{
        try {
          // this.setState({PlasticWaste: await AsyncStorage.getItem("Plastic")});
          // this.setState({MetalWaste: await AsyncStorage.getItem("Metal")});
          // this.setState({WetWaste: await AsyncStorage.getItem("Wet")});
          // this.setState({PaperLeavesWaste: await AsyncStorage.getItem("Paper")});
          this.colorPlastic();
          this.colorMetal();
          this.colorPaper();
          this.colorWet();
        } catch (e) {
          console.log(e)
        }
      }
      componentDidMount = async() =>{
        this.refresh=this.props.navigation.addListener("focus", async()=>{
        let url="http://192.168.100.15/WasteSegregationAPI/displaystorage.php";
        let response=await get (url,{});
        let decoded_object= JSON.parse(response);
        this.setState({
              info:decoded_object
        });
        var test = this.state.info.map((bin)=>{
          let PlasticWaste = bin.PlasticLevel;
          let MetalWaste = bin.MetalLevel;
          let WetWaste = bin.WetLevel;
          let PaperLeavesWaste = bin.PaperLeavesLevel;
          
          this.setState({PlasticWaste});
          this.setState({MetalWaste});
          this.setState({WetWaste});
          this.setState({PaperLeavesWaste});
          console.log(this.state.info);
          console.log(this.state.PlasticWaste);
          })
        this.init();
        })
    }
      componentWillUnmount=()=>{
        this.refresh();
      }

      colorPlastic = () => {
        var colorCount = this.state.PlasticWaste;
          if (colorCount >50 && colorCount <=80 ){
            this.setState({barColorPlastic: "#c4f71b"});
          }
          else if (colorCount >80) {
            this.setState({barColorPlastic: "#eb4034"});
          }
          else {
            this.setState({barColorPlastic: "#42f551"});
          }
      }
      colorMetal = () => {
        var colorCount = this.state.MetalWaste;
          if (colorCount >50 && colorCount <=80 ){
            this.setState({barColorMetal: "#c4f71b"});
          }
          else if (colorCount >80) {
            this.setState({barColorMetal: "#eb4034"});
          }
          else {
            this.setState({barColorMetal: "#42f551"});
          }
      }
      colorPaper = () => {
        var colorCount = this.state.PaperLeavesWaste;
          if (colorCount >50 && colorCount <=80 ){
            this.setState({barColorPaper: "#c4f71b"});
          }
          else if (colorCount >80) {
            this.setState({barColorPaper: "#eb4034"});
          }
          else {
            this.setState({barColorPaper: "#42f551"});
          }
      }
      colorWet = () => {
        var colorCount = this.state.MetalWet;
          if (colorCount >50 && colorCount <=80 ){
            this.setState({barColorWet: "#c4f71b"});
          }
          else if (colorCount >80) {
            this.setState({barColorWet: "#eb4034"});
          }
          else {
            this.setState({barColorWet: "#42f551"});
          }
      }
    render(){
        return(
    
        <View style={styles.container}>
            <View style={{flexDirection:"row",}}>
            <AnimatedCircularProgress
                size={140}
                width={10}
                backgroundWidth={5}
                rotation={0}
                lineCap="round"
                fill={this.state.PlasticWaste}
                tintColor={this.state.barColorPlastic}
                backgroundColor="#cccccc">
                {(content) => (
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Image source={require("../assets/PlasticWaste.png")} style={{height:50, width:50,}}/>
                        <Text style={{color:"#42f551", fontSize: 20, fontWeight:"bold"}}>{this.state.PlasticWaste}%</Text>
                    </View>
                )}
            </AnimatedCircularProgress>
            <sp.SizedBox width={40}/>
            <AnimatedCircularProgress
                size={140}
                width={10}
                backgroundWidth={5}
                rotation={0}
                lineCap="round"
                fill={this.state.PaperLeavesWaste}
                tintColor={this.state.barColorPaper}
                backgroundColor="#cccccc">
                {(content) => (
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Image source={require("../assets/PaperWaste.png")} style={{height:50, width:50,}}/>
                        <Text style={{color:"#42f551", fontSize: 20, fontWeight:"bold"}}>{this.state.PaperLeavesWaste}%</Text>
                    </View>
                )}
            </AnimatedCircularProgress>
            </View>
            <sp.SizedBox height={10}/>
            <View style={{flexDirection:"row",}}>
                <View style={{width:140, alignItems:"center"}}>
                    <Text style={{ fontWeight:"700",}}>Plastic</Text>
                </View>
                <sp.SizedBox width={40}/>
                <View style={{width:140, alignItems:"center",}}>
                    <Text style={{ fontWeight:"700",}}>Paper and Leaves</Text>
                </View>
            </View>

            <sp.SizedBox height={40}/>

            <View style={{flexDirection:"row",}}>
            <AnimatedCircularProgress
                size={140}
                width={10}
                backgroundWidth={5}
                rotation={0}
                lineCap="round"
                fill={this.state.MetalWaste}
                tintColor={this.state.barColorMetal}
                backgroundColor="#cccccc">
                {(content) => (
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Image source={require("../assets/MetalWaste.png")} style={{height:50, width:50,}}/>
                        <Text style={{color:"#42f551", fontSize: 20, fontWeight:"bold"}}>{this.state.MetalWaste}%</Text>
                    </View>
                )}
            </AnimatedCircularProgress>
            <sp.SizedBox width={40}/>
            <AnimatedCircularProgress
                size={140}
                width={10}
                backgroundWidth={5}
                rotation={0}
                lineCap="round"
                fill={this.state.WetWaste}
                tintColor={this.state.barColorWet}
                backgroundColor="#cccccc">
                {(content) => (
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Image source={require("../assets/WetWaste.png")} style={{height:50, width:50,}}/>
                        <Text style={{color:"#42f551", fontSize: 20, fontWeight:"bold"}}>{this.state.WetWaste}%</Text>
                    </View>
                )}
            </AnimatedCircularProgress>
            </View>
            <sp.SizedBox height={10}/>
            <View style={{flexDirection:"row",}}>
                <View style={{width:140, alignItems:"center"}}>
                    <Text style={{ fontWeight:"700",}}>Metal</Text>
                </View>
                <sp.SizedBox width={40}/>
                <View style={{width:140, alignItems:"center",}}>
                    <Text style={{ fontWeight:"700",}}>Wet Waste</Text>
                </View>
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