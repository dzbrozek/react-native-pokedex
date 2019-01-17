import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Pokedex from '../screens/Pokedex';
import Favourite from '../screens/Favourite';
import About from '../screens/About';
import { theme } from '../constants';
import React from 'react';
import TabBarIcon from '../components/TabBarIcon';

const AboutStack = createStackNavigator({
  About,
}, {
  defaultNavigationOptions: {
    headerTitleStyle: {
      fontSize: 16,
      color: theme.colors.white,
      fontFamily: 'Roboto-Regular',
      alignContent: 'center',
    },
    headerStyle: {
      backgroundColor: theme.colors.red,
    },
  },
});

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBarIcon
      focused={focused}
      size={26}
      color={theme.colors.white}
      name="md-information-circle"
    />
  ),
};

const Tabs = createBottomTabNavigator({
  Pokedex,
  Favourite,
  AboutStack,
}, {
  initialRouteName: 'AboutStack',
  tabBarOptions: {
    activeTintColor: theme.colors.white,
    activeBackgroundColor: theme.colors.red,
    inactiveTintColor: theme.colors.lightgrey,
    inactiveBackgroundColor: theme.colors.lightRed,
    showLabel: true,
    showIcon: true,
  },
});

export default Tabs;
