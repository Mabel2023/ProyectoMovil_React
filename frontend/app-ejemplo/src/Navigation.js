import React from "react";
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Menu from "./componentes/home/Menu";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ListComponent from "./componentes/list/List";
import User from './screen/User'
import Chat from "./screen/Chat";
import Pdf from "./screen/Pdf";

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="Inicio" component={Menu} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={'#E74AF1'} size={size}/>
                )
            }}/>
            <Tab.Screen name={'Lista'} component={ListComponent} options={{
                tabBarLabel: 'Listado',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'clipboard-list'} color={'orange'} size={size}/>
                )
            }}/>
            <Tab.Screen name={'Nombre'} component={User} options={{
                tabBarLabel: 'Nombre',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'account'} color={'pink'} size={size}/>
                )
            }}/>
            <Tab.Screen name={'openIA'} component={Chat} options={{
                tabBarLabel: 'openIA',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'brain'} color={'blue'} size={size}/>
                )
            }}/>
            <Tab.Screen name={'PDF'} component={Pdf} options={{
                tabBarLabel: 'PDF',
                tabBarIcon: ({color , size}) => (
                    <MaterialCommunityIcons name={'file-pdf-box'} color={'red'} size={size}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default Navigation