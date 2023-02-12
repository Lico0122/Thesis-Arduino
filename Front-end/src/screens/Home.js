import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

const { height, width } = Dimensions.get("window");

const Home = () => {


    return (
    	<View style={styles.container}>
			<Text style={styles.titleStyle}>Waste Segregation App</Text>
    		<View style={styles.content}>
				<Image source={require("../../assets/design.png")} style={styles.designStyle}/>
			</View>
    	</View>
    )
};


const styles = StyleSheet.create({
    container:{
    	flex:1,
		backgroundColor: "#446129",
    },
	content: {
		backgroundColor: "#e8e8e8",
		height: height * .8,
		marginTop: "50%",
		borderTopLeftRadius: 100,
		alignItems:"center",
		paddingTop: 70,
	},
	designStyle: {
		height: 320, 
		width: 202
	},
	titleStyle: {
		color: "#e8e8e8",
		alignSelf:"center",
		position:"absolute",
		top: "10%",
		fontSize: 25,
		fontWeight: "500",
	}
});
export default Home;