import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';

const BinsProgress = ({value, image}) => {


    return (
    	<CircularProgressBase 
            radius={70}
			value={value}
            activeStrokeColor={'#42f551'}
            activeStrokeSecondaryColor={'#c4f71b'}
            inActiveStrokeOpacity={0.2}
            inActiveStrokeWidth={6}>
            <Image source={image} style={{height:50, width:50,}}/>
            <Text style={{color:"#42f551", fontSize: 20, fontWeight:"bold"}}>{value}%</Text>
        </CircularProgressBase>
    )
};


const styles = StyleSheet.create({
    container:{
    	flex:1,
    	justifyContent: 'center',
    	alignItems: 'center',
    }
});
export default BinsProgress;