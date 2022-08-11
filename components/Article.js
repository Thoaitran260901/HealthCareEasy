import React from 'react';
import { View,Text, StyleSheet,SafeAreaView, Image } from 'react-native';
import moment from 'moment';

const Article = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            {/* image*/}
            <Image source={{
                uri:props.urlToImage
            }}
            style={styles.image}
            />
            <View style={{padding:20}}>
                {/* title*/}
                <Text style={styles.title}>{props.title}</Text>

                {/* description*/}
                <Text style={styles.description} numberOfLines={3}>{props.description}</Text>
            
                <View style={styles.data}>
                    <Text style={styles.heading}>TPHCM</Text>
                    <Text style={styles.date}>{moment(props.publishedAt).format("MMM Do YY")}</Text>
                </View>
                
                {/* source*/}
                <View style={{marginTop:10}}>
                    <Text> Nguồn: <Text style={styles.source}>{props.sourceName}</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
export default Article;

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
    image:{
        height:200,
        width:"100%",
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    title:{
        fontSize:25,
        fontWeight:"600",
        marginTop: 10
    },
    description:{
        fontSize:18,
        fontWeight:"400",
        marginTop: 10
    },
    data:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10
    },
    heading:{

    },
    date:{
        fontWeight:"bold",
        color:"#e63946",
        fontSize:16
    },
    source:{
        fontWeight:"bold",
        color:"#e63946",
        fontSize:18
    }
});