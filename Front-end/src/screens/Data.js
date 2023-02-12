import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import BinsProgress from '../components/BinsProgress';

const { height, width } = Dimensions.get("window");

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

const Data = () => {

	const [ plasticWaste, setPlasticWaste ] = useState(0);
	const [ metalWaste, setMetalWaste ] = useState(0);
	const [	wetWaste, setWetWaste ] = useState(0);
	const [ paperWaste, setPaperWaste ] = useState(0);


	useEffect(() => {
		const getData = async() => {
			let url="http://192.168.43.132/ActubAPI/displaydata.php";
        	let response=await get (url,{});
        	let decoded_object= JSON.parse(response);
			setPlasticWaste(decoded_object.PlasticWaste);
			setMetalWaste(decoded_object.MetalWaste);
			setWetWaste(decoded_object.WetWaste);
			setPaperWaste(decoded_object.PaperWaste);
		}
		getData();
	}, [])


    return (
    	<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.titleStyle}>Monitor Bins</Text>
			</View>
    		<View style={styles.content}>
				<View style={{flexDirection: "row", justifyContent:"space-evenly"}}>
					<BinsProgress
						value={plasticWaste}
						image={require("../../assets/PlasticWaste.png")}/>
					<BinsProgress
						value={metalWaste}
						image={require("../../assets/MetalWaste.png")}/>
				</View>
				<View style={{height: 40}} />
				<View style={{flexDirection: "row", justifyContent:"space-evenly"}}>
					<BinsProgress
						value={wetWaste}
						image={require("../../assets/WetWaste.png")}/>
					<BinsProgress
						value={paperWaste}
						image={require("../../assets/PaperWaste.png")}/>
				</View>
			</View>
    	</View>
    )
};


const styles = StyleSheet.create({
    container:{
    	flex:1,
		padding: 10,
    	backgroundColor: "#446129",
    },
	content: {
		backgroundColor: "#e8e8e8",
		height: height * .7,
		borderRadius: 30,
		justifyContent:"center",
		marginBottom: 40,
	},
	header: {
		flex:1,
		backgroundColor: "#446129",
		justifyContent:"center",
		alignItems: "center",
	},
	titleStyle: {
		color: "#e8e8e8",
		fontSize: 25,
		fontWeight: "500",
		
	}
});
export default Data;