import React from "react";
//import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import About from "../screens/About";
import HomeStack from "./HomeStack";
import About2 from "../screens/About2";
import Cart from "../screens/Cart";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name = "home" component={Home} options={{title: 'Home'}}/> */}
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-account"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="contact"
        component={Contact}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-account"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="about"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-account"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="about2"
        component={About2}
        options={{
          tabBarLabel: "location",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-account"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-account"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

/* const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "home" component={Home} options={{title: 'Home'}}/>
            <Stack.Screen name = "contact" component={Contact} options={{title: 'Contact'}}/>
            <Stack.Screen name = "about" component={About} options={{title: 'Acerca de nosotros'}}/>
        </Stack.Navigator>
    )

} */
