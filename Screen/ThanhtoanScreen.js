import React from 'react';
import { View,Text, StyleSheet,ScrollView } from 'react-native';

const ThanhtoanScreen = ({navigation}) => {
    return(
        <ScrollView>
            <View style={styles.container}>
                
                <View style={{marginTop:30, paddingHorizontal:20}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Test</Text>
                    <Text style={{fontSize:12, fontWeight:'40', color:'#808080',marginTop:5}}>Address</Text>
                </View>
            </View>
        </ScrollView>


    );
}
export default ThanhtoanScreen;

const styles = StyleSheet.create({
    container:{
        width:"90%",
        alignSelf:"center",
        borderRadius:20,
        shadowOpacity:0.5,
        shadowColor:"#000",
        textShadowOffset:{
            height:5,
            width:5
        },
        backgroundColor:"#fff",
        marginTop:20

    },
});