import { createStackNavigator } from 'react-navigation';
import About from '../screens/About';
import { theme } from '../constants';
import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import { defaultNavigationOptions } from '../constants/navigation';

const AboutStack = createStackNavigator({
  About,
}, defaultNavigationOptions);

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBarIcon
      focused={focused}
      size={theme.components.tabBarIconSize}
      color={theme.colors.white}
      name="info-circle"
    />
  ),
};

export default AboutStack;
