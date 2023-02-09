import React, {Component} from "react";
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity,} from "react-native";
import * as sp from "../shared/sp";
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
            PlasticWaste:50,
            PaperLeavesWaste:50,
            MetalWaste:50,
            WetWaste:50,

    }
}

componentDidMount = async()=>{
//     this.refresh=this.props.navigation.addListener("focus", async()=>{
//     let url="http://192.168.100.15/WasteSegregationAPI/displaydata.php";
//     let response=await get (url,{});
//     let decoded_object= JSON.parse(response);
//     this.setState({
//       info:decoded_object
//     });

//     var test = this.state.info.map((bin)=>{
//         let PlasticWaste = bin.PlasticWaste;
//         let MetalWaste = bin.MetalWaste;
//         let WetWaste = bin.WetWaste;
//         let PaperLeavesWaste = bin.PaperLeavesWaste;

//         this.setState({PlasticWaste});
//         this.setState({MetalWaste});
//         this.setState({WetWaste});
//         this.setState({PaperLeavesWaste});
        
//         console.log(this.state.info);
        
//     })

// });
  }

    componentWillUnmount = async() =>{
        this.refresh();
    }

    NextPage = async() =>{
        // await AsyncStorage.setItem("Plastic", this.state.PlasticWaste);
        // await AsyncStorage.setItem("Metal", this.state.MetalWaste);
        // await AsyncStorage.setItem("Paper", this.state.PaperLeavesWaste);
        // await AsyncStorage.setItem("Wet", this.state.WetWaste);
        this.props.navigation.navigate("Dashboard");
    }

    render(){
        return(
    <ImageBackground source={require("../assets/HomePageUI.png")} style={styles.container}>
        <View style={styles.subContainer}>
            <TouchableOpacity onPress={this.NextPage} style={{height:38, width:45,}}>
                <ImageBackground source={require("../assets/ArrowBlackBTN.png")} style={{height:38, width:45,}}/>
            </TouchableOpacity>
        </View>
    </ImageBackground>

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