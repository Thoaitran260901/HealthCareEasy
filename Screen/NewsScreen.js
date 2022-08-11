import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

const NewsScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>News Screen</Text>
        </View>

    );
}
export default NewsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00000'

    },
});