import React from 'react';
import { View,Text, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const ThanhtoanScreen = ({navigation}) => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={{marginTop:30, paddingHorizontal:20}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>ten benh vien</Text>
                    <Text style={{fontSize:12, fontWeight:'bold', color:'#808080',marginTop:5}}>Address</Text>
                    <View style={{marginTop:20}}>
                        <Icon name='today' size={25} color='#000'/>
                    </View>
                    <View style={{ marginTop:10,justifyContent:'space-between',flexDirection:"row",marginBottom:20}}>
                        <Text >Ngày nhận phòng</Text>
                        <Text style={{fontWeight:'bold'}}> 15/5/2022</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop:10}}>
                <Text style={{marginTop:10, fontSize:20,fontWeight:'bold',marginLeft:20}}>Chi phí thanh toán</Text>
            </View>
            <View style={styles.container2}>
                <View style={{ marginTop:10,justifyContent:'space-between',flexDirection:"row",marginBottom:10}}>
                    <Text style={{fontSize:18}}>Tổng chi phí:</Text>
                    <Text style={{fontSize:18}}>5.000.000.000VND</Text>
                    
                </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={ ()=>console.log('test')} >
                        <Text style={{color:'#FFFFFF',fontSize:16, fontWeight:'bold'}}>Thanh Toán</Text>
            </TouchableOpacity>
        </ScrollView>


    );
}
export default ThanhtoanScreen;

const styles = StyleSheet.create({
    container:{
        width:"90%",
        alignSelf:"center",
        borderRadius:10,
        shadowOpacity:0.5,
        shadowColor:"#000",
        textShadowOffset:{
            height:5,
            width:5
        },
        backgroundColor:"#fff",
        marginTop:10

    },
    container2:{
        width:"90%",
        alignSelf:"center",
        shadowOpacity:0.2,
        shadowColor:"#000",
        textShadowOffset:{
            height:5,
            width:5
        },
        backgroundColor:"#fff",
        marginTop:10
    },
    btn:{
        height:55,
        justifyContent:'center',
        alignItems:'center',
        marginTop:200,
        backgroundColor:'#00FFFF',
        marginHorizontal:20,
        borderRadius:10
    },
});