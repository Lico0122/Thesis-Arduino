import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Profile = ({image, name, email}) => {


    return (
    	<View style={styles.container}>
    		<Image source={image} style={styles.profileContainer} />
            <View style={styles.info}>
				<Text style={styles.nameStyle}>{name}</Text>
				<Text style={styles.emailStyle}>{email}</Text>
			</View>
    	</View>
    )
};


const styles = StyleSheet.create({
    container:{
    	flexDirection:"row",
        marginTop: 30
    },
    profileContainer: {
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    nameStyle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    emailStyle: {
        fontSize: 12,
        fontStyle: "italic"
    },
    info: {
        justifyContent: "center", 
        paddingLeft: 20
    }
});
export default Profile;