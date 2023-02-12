import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ItemDescription = ({itemDescription, num}) => {


    return (
    	<View style={styles.container}>
    		<Text style={styles.numberStyle}>{num}</Text>
            <Text style={styles.itemStyle}>{itemDescription}</Text>
    	</View>
    )
};


const styles = StyleSheet.create({
    container:{
    	flexDirection: "row",
        marginLeft: 10,
        marginTop: 10
    },
    numberStyle: {
        fontWeight: "600",
        fontSize: 16,
    },
    itemStyle: {
        lineHeight: 20,
        textAlign: "justify",
        marginLeft: 10
    }
});
export default ItemDescription;