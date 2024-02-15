import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/components/navigation/AppNavigator';
import ActivityIndicator from './app/components/common/ActivityIndicator';
import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerItemList, createDrawerNavigator, DrawerView } from "@react-navigation/drawer";
import Home from "./app/components/screens/Home";
import EntertainmentNews from "./app/components/EntertainmentNews";
import PoliticalNews from "./app/components/PoliticalNews";
import TechNews from "./app/components/TechNews";
import BreakingNews from "./app/components/BreakingNews";
import VerticalCard from './app/components/cards/VerticalCard';
import FlatCard from './app/components/cards/FlatCard';
import newsApi from './app/api/newsApi';
import Title from './app/components/common/Title';


const Drawer = createDrawerNavigator();

export default function App({ title, data }) {
  return (
    <NavigationContainer>
      <ActivityIndicator/>
      <Drawer.Navigator>
      <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Home}
        />
        <Drawer.Screen
          name="EntertainmentNews"
          options={{
            drawerLabel: "EntertainmentNews",
            title: "EntertainmentNews",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={EntertainmentNews}
        />
     

      </Drawer.Navigator>
    </NavigationContainer>
        
  );
}
