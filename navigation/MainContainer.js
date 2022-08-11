import React from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import NewsScreen from '../Screen/NewsScreen';
import DetailsScreen from '../Screen/DetailScreen';
import Thanhtoan from '../Screen/ThanhtoanScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const NewFeedStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown:true
  }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{headerTintColor: '#ffffff'}}/>
      <HomeStack.Screen name="Details" component={DetailsScreen} options={{headerTintColor: '#ffffff'}}/>
      <HomeStack.Screen name="Thanhtoan" component={Thanhtoan}/>
    </HomeStack.Navigator>
  );
}

function NewFeedStackScreen() {
  return (
    <NewFeedStack.Navigator screenOptions={{
      headerShown:true
  }}>
      <NewFeedStack.Screen name='News' component={NewsScreen} options={{headerTintColor: '#ffffff'}}/>
    </NewFeedStack.Navigator>
  );
}

function AccountStackScreen() {
  return (
    <AccountStack.Navigator screenOptions={{
      headerShown:true
  }}>
      <AccountStack.Screen name='Account' component={ProfileScreen} options={{headerTintColor: '#ffffff'}}/>
    </AccountStack.Navigator>
  );
}

const MainContainer= ()=>{
    return(
        <NavigationContainer>
        <Tab.Navigator screenOptions={{
                headerShown:false
            }}>
                <Tab.Screen name='Trang chủ' component={HomeStackScreen}/>
                <Tab.Screen name='Tin tức' component={NewFeedStackScreen}/>
                <Tab.Screen name='Tài khoản' component={AccountStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;
