import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import ItemDescription from '../components/ItemDescription';



const { height, width } =  Dimensions.get("window");

const description1 = "    To ensure that the system is used safely and in good working order, follow all safety and operating instructions.";
const description2 = "    The system is 48 inch in length and 30 inch in width for automatic waste segregating and converting organic waste into fertilizer. The system utilizes three sensors and three servos; those sensors are moisture sensor, inductive sensor and capacitive sensor while for converting organic waste to fertilizer, there is a grinder in one of the bins to tear the organic waste into smaller pieces. There are four conveyor belts inside the system run by DC motor, it is use to carry the waste in order to segregate it. Regulated transformers are used to power up the Arduino and components. For users convenience, there is a wheel attached on the system for moving it comfortably.";
const description3 = "    With the use of sensors and servo, the system will automatically segregate the waste while producing fertilizer from organic fertilizer.";

const UserManual = () => {


    return (
    	<View style={styles.container}>
			<View style={{flex:1}}/>
			<View>
				<View style={styles.content}>
					<View style={styles.headerPad}/>
					<View style={styles.contentsContainer}>
						<ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
						<Text style={styles.subTitle}>SAFETY INFORMATION</Text>
						<Text style={styles.description}>{description1}</Text>
						<Text style={styles.subTitle}>MAINTENANCE</Text>
							<ItemDescription
								num={"1."}
								itemDescription={"Always pullout the plug from the source when checking the components."}/>
							<ItemDescription
								num={"2."}
								itemDescription={"Use dry cloth in cleaning the components and chassis."}/>
						<Text style={styles.subTitle}>DURING USE</Text>
							<ItemDescription
								num={"1."}
								itemDescription={"Avoid putting open cap drinks that can spilled inside the system."}/>
							<ItemDescription
								num={"2."}
								itemDescription={"Be careful in using the grinder, it can cause wounds and cut."}/>
							<ItemDescription
								num={"3."}
								itemDescription={"To have better accuracy, avoid putting multiple waste in bag since the sensor will detect it as one waste."}/>
							<ItemDescription
								num={"4."}
								itemDescription={"Avoid pulling out the plug when the system is running."}/>
							<ItemDescription
								num={"5."}
								itemDescription={"Never use multimeter while the system is running."}/>
						<Text style={styles.subTitle}>GENERAL DESCRIPTION</Text>
						<Text style={styles.description}>{description2}</Text>
						<Text style={styles.subTitle}>SPECIFICATIONS</Text>
						<Text style={styles.description}>{description3}</Text>
						<Text style={styles.subTitle}>OPERATING INSTRUCTION</Text>
						<ItemDescription
								num={"1."}
								itemDescription={"Plug the transformers to power up the components."}/>
							<ItemDescription
								num={"2."}
								itemDescription={"Put the waste on the hole in front of the chassis, infrared sensor will detect the waste and conveyor belts will run."}/>
							<ItemDescription
								num={"3."}
								itemDescription={"For organic waste, it will go directly to the grinder. Once users are satisfied, they can turn on the grinder by pressing the button in front of the drawer."}/>
							<ItemDescription
								num={"4."}
								itemDescription={"User can use mobile application to check the level of bins, once a bin is full, it will automatically send notification to the user."}/>
						<View style={{height: 25}} />
						</ScrollView>
					</View>
				</View>
				<View style={styles.circleIc}>
					<Text style={styles.titleStyle}>User's Manual</Text>
				</View>
			</View>
			
    	</View>
    )
};


const styles = StyleSheet.create({
    container:{
    	flex:1,
		backgroundColor: "#446129",
		padding: 10
    },
	circleIc: {
		backgroundColor: "#446129",
		height: height / 4,
		width: "100%",
		borderBottomLeftRadius: width,
		borderBottomRightRadius: width,
		position:"absolute",
		justifyContent:"center",
		alignItems: "center"
	},
	titleStyle: {
		color: "#e8e8e8",
		fontSize: 25,
		fontWeight: "500",
	},
	content: {
		backgroundColor: "#e8e8e8",
		height: height * .9,
		marginBottom: 40,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		borderTopLeftRadius: 100,
		borderTopRightRadius: 100
	},
	// CONTENTS
	headerPad: {
		height: height/4, 
		width:"100%"
	},
	contentsContainer: {
		padding: 10,
		flex:1,
	},
	subTitle: {
		fontSize: 18,
		fontWeight:"bold",
		marginTop: 10
	},
	description: {
		textAlign:"justify",
		lineHeight: 20,
		marginTop: 5
	}

});
export default UserManual;