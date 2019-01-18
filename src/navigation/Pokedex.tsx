import { createStackNavigator } from 'react-navigation';
import Pokedex from '../screens/Pokedex';
import { theme } from '../constants';
import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import { defaultNavigationOptions } from '../constants/navigation';

const PokedexStack = createStackNavigator({
  Pokedex,
}, defaultNavigationOptions);

PokedexStack.navigationOptions = {
  tabBarLabel: 'Pokedex',
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBarIcon
      focused={focused}
      size={theme.components.tabBarIconSize}
      color={theme.colors.white}
      name="th"
    />
  ),
};

export default PokedexStack;
