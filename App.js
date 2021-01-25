import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DietList from './src/screens/DietList';
// import EditMenu from './src/screens/EditMenu';
import AllMenus from './src/screens/AllMenus';

const Tab = createBottomTabNavigator();
const DietListStack = createStackNavigator();
const AllMenusStack = createStackNavigator();

const DietListStackScreen = () => {
  return (
    <DietListStack.Navigator initialRouteName="DietList">
      <DietListStack.Screen name="DietList" component={DietList} />
      <DietListStack.Screen name="AllMenus" component={AllMenus} />
    </DietListStack.Navigator>
  );
};

const AllMenusStackScreen = () => {
  return (
    <AllMenusStack.Navigator>
      <AllMenusStack.Screen name="AllMenus" component={AllMenus} />
    </AllMenusStack.Navigator>
  );
};

export default function App() {
  //Navigations between Screens
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'DietList') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'AllMenus') {
              iconName = focused ? 'menu-sharp' : 'menu-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FF3366',
          inactiveTintColor: '#828282',
        }}
      >
        <Tab.Screen name="DietList" component={DietListStackScreen} />
        <Tab.Screen name="AllMenus" component={AllMenusStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
