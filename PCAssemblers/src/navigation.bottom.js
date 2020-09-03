import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import HomeScreen from './components/homescreen.component';
import BuildScreen from './components/build.component';
import PartsScreen from './components/findparts.component';
import DetailsScreen from './components/details.component';


const { Navigator, Screen:TabScreen } = createBottomTabNavigator();

const { Navigator: StackNavigator, Screen } = createStackNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Home'/>
    <BottomNavigationTab title='Build'/>
    <BottomNavigationTab title='Find Parts'/>
  </BottomNavigation>
);


const ScreenNavigator = () => (
  <StackNavigator headerMode='none'> 
    <Screen name='PartsScreen' component={PartsScreen}  />
    <Screen name='Details' component={DetailsScreen}/> 
  </StackNavigator>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <TabScreen name='Home' component={HomeScreen}/>
    <TabScreen name='Build' component={BuildScreen}/>
    <TabScreen name='Parts' component={ScreenNavigator}  />
  </Navigator>
);



export const AppNavigator = () => (
  <>
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
  </>
);