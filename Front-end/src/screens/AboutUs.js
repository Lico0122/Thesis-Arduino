import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Profile from '../components/Profile';


const { height, width } = Dimensions.get("window");
const description = "     We are students from Polytechnic University of the Philippines Biñan Campus, currently taking Bachelor of Science in Computer Engineering with the goal of proper waste segregation and produce fertilizer from organic waste.";

const AboutUs = () => {


    return (
    	<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.titleStyle}>About Us</Text>
			</View>
    		<View style={styles.content}>
				<Text style={styles.description}>{description}</Text>
				<View style={{padding: 20}}>
					<View >
						<Profile 
							image={require("../../assets/actub.png")}
							name={"Bryan Yj Actub"}
							email={"byactub@iskolarngbayan.pup.edu.ph"}
							/>
						<Profile 
							image={require("../../assets/lico.png")}
							name={"Kyle Allan T. Lico"}
							email={"katlico@iskolarngbayan.pup.edu.ph"}
							/>
						<Profile 
							image={require("../../assets/palibino.jpg")}
							name={"Gimuel H. Palibino"}
							email={"ghpalibino@iskolarngbayan.pup.edu.ph"}
							/>
					</View>
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
		marginBottom: 40,
		padding: 10,
		paddingTop: 30
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
	},
	description: {
		textAlign: "justify",
		lineHeight: 20
	}
});
export default AboutUs;