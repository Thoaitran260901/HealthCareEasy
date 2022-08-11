import React from 'react';
import { View,Text, StyleSheet,ScrollView,ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const DetailScreen = ({navigation}) => {
    return(
        <ScrollView>
            <ImageBackground style={styles.headerImage} 
                    source={{
                        uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAAAD///8wMDDCwsKGhoaWlpbS0tLKysrPz8/V1dXR0dHMzMx7e3vt7e1GRkacnJzf39+pqan29va0tLRwcHDm5uZZWVk7OzsUFBSvr68oKCjp6en09PRiYmJUVFQcHBwLCwsrKytsbGxLS0uzS3iIAAAEvUlEQVR4nO3d63riIBAG4LFqu7aez9ZD3fb+73HrWldzggkww8DO97sE3seKCUkG6PBlvhiOt7AdDxdzxl6BrafREu5Zjtj6ZRNOoJgJV8dcwjGUM2bqmUc4OleAAGee/1QW4arGd8mKo3MO4bQBCDBl6J1BOGgEAgzou6cXmoAcRHKhGchApBbagPREYqEdSE6kFWKA1ERSIQ5ITKQUYoFW4qC/fi+1OG+WuwNqFIRCPNBM3G2bWh0xZwx0wjZAA3H6YWo2tI+DTNgO2EhcWJq9Wy+mqYRtgQ3Emb2djUgkbA8EeK4e5g3R7LdlKDRCF2ANcY5q1osgdANWiUNcM/NlJoXw2RFYJh6QrT65he7AErG8eNUY42QTXugDLBI32EYLVqEfsEBEtzHONaGFvsAHYvPyTjknRqE/8E58Rbd44hOGAP4j/hIoDAMEeJUqDAX8IcoThgNeieKEIYF/idKEYYEXojBhaOD39SL+/J1DGB4I0JckpAC2CL0wMpBeGBtILowOpBbiT5ATFQoA0golAEmFIoCUQhlAQqEQIJ1QCpBMKAZIJZQDJBIKAtIIJQFJhPjrb44QCGUBCYTCgOGF0oDBheKAoYXygIGFAoFhhRKBQYUigSGFMoEBhUKB4YRSgcGEYoGhhHKBgYSCgWGEkoFBhKKBIYSygQGEmEd1Y8ZbKB3oLRQP9BXKB3oKEwD6CVMAegmTAPoI0wB6CBMBugtTAQK8uQnTARqJzcKUgAAv7YVpAQ3EJmFqwGZigzA9YCOxXpgisIlYK0wT2ECsE6YKrCfWCNMF1hKrwpSBdcSK8CX2GD1TIZaFqQOrRMgNWCFCdsAyEfIDloiQIbBIhByBBSJkCXwkQp7AB+JNmPaZTF1eisL47y6Fz/OjEF++IKVM78J97LEQZX8T4kr5pJj5j7Ba4zeXjK9CdKGbBDO5CEexR0Ga0bdwaf+zhLPsQL7TzDVzsJXtSz0LQNZESzZDyPen4poxNBYHzSS5+y7J3bj9D76H+c+l+f8eYktoppoDdI6xx0Ca4/eZd54rGLesLteHvdijIEzveo2ProSaXDa3lahy0fpc8n5fTTzFHgtJTo8rwrvYoyHIrnTfYvYUe0RB8zSrubt26M76hUyM2xIIysekOPBZ92HrC+Mzwql8rO5PQatQSlSoQvlRoQrlR4UqlB8V0grXw54pw3WAPiIKJ5gdf1fej0pEE85Mxy4Esb2aQOEGtwHjNQev9b44wnUL3yU+38cowvY7p3vc5osibA1ssYGVCGHXQdhNSbhxAHrcXYggdPkIPT7ECEInoPs3kV94dBS6/mLwC/uOQvzeObGFxh0XDXF9aoJf6DbRuE81KlShClWoQhWqUIUqVKEKVahCFapQhSpUoQpVqEIVqlCFKlShClWoQhWqUIUqVKEKVahCFapQhSpUoQpVqEIVqlCFKlQhVviViPDkLHStT8stHDoLXd+04hYa3yQzCl1r7nML585C1/q0zELzC51moWN9Wmbh1EPoONfwCo3zjFXYcSoOySr8sBzUJnTao4VVOPIUdkYOhfcZhVsb0C7sdD4FCz/tB8UUBxi0PXvjEn49Iw6KK3+wny03Z1HC82Y526MO+gc2J2RDz3wcVwAAAABJRU5ErkJggg=="
                    }}>
                        <TouchableOpacity onPress={navigation.goBack}>
                            <View style={styles.header}>
                                <Icon name='arrow-back-ios' size={30} color='#000'/>
                            </View>
                        </TouchableOpacity>
                      </ImageBackground>
                <View>
                    <View style={styles.iconContainer}>
                        <Icon name='place' size={30}/>
                    </View>

                    <View style={{marginTop:30, paddingHorizontal:20}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Test</Text>
                        <Text style={{fontSize:12, fontWeight:'bold', color:'#808080',marginTop:5}}>Address</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{lineHeight:20,color:'#808080'}}>nội dungnội dungnội dungnội dungnội dungnội dungnội dungnội dungnội dungnội dungnội dungnội dung</Text>
                    </View>
                    <View 
                        style={{
                            marginTop:150,
                            flexDirection:'row',
                            justifyContent:'space-between',
                            paddingLeft:20,
                            alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Giá:</Text>
                        <View style={styles.priceTag}>
                            <Text style={{fontSize:16,fontWeight:'bold',color:'#808080',marginLeft:5}}>500000</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={ ()=>navigation.navigate("Thanhtoan") } >
                        <Text style={{color:'#FFFFFF',fontSize:16, fontWeight:'bold'}}>Book</Text>
                    </TouchableOpacity>
                    
                </View>
        </ScrollView>


    );
}
export default DetailScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00000'

    },
    header:{
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
        justifyContent:'space-between'
    },
    btn:{
        height:55,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
        backgroundColor:'#00FFFF',
        marginHorizontal:20,
        borderRadius:10
    },
    iconContainer:{
        position:'absolute',
        height:50,
        width:50,
        backgroundColor:'#00FFFF',
        color:'#fffff',
        top:20,
        right:20,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    headerImage:{
        height:300,
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,

    },
    priceTag:{
        height:40,
        alignItems:'center',
        marginLeft:40,
        paddingLeft:20,
        flex:1,
        backgroundColor:'#66CC99',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        flexDirection:'row'
    }
});