import React,{useEffect, useState} from 'react';
import { View,Text, StyleSheet,SafeAreaView, ScrollView, FlatList,TouchableOpacity } from 'react-native';
import Article from '../components/Article';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
    const [articles,setArticles] = useState([]);
    const getNews=()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=12ee960107bd4938bae69690181c4922',{
            params:{
                category:"health"
            }
        })
        .then( (response)=> {
            // xử trí khi thành công
            
            setArticles(response.data.articles);
        })
        .catch(function (error) {
            // xử trí khi bị lỗi
            console.log(error);
        })
        .then(function () {
            // luôn luôn được thực thi
        });
    }
    useEffect(()=>{
        getNews();
    }, []);
    return(
        <SafeAreaView style={styles.container}>
                <FlatList
                    data={articles}
                    renderItem={({item})=>
                        <TouchableOpacity onPress={ ()=>navigation.navigate("Details") }>
                            <Article
                                urlToImage = {item.urlToImage}
                                title = {item.title}
                                description ={item.description}
                                publishedAt ={item.publishedAt}
                                sourceName ={item.source.name}
                            />
                        </TouchableOpacity>}
                    keyExtractor= {(item)=>item.title}
                />
        </SafeAreaView>

    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{
    },
});