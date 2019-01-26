import { createStackNavigator } from 'react-navigation';
import { theme } from '../constants';
import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import { defaultNavigationOptions } from '../constants/navigation';
import Favourite from '../screens/Favourite';
import Pokemon from '../screens/Pokemon';

const FavouriteStack = createStackNavigator({
  Favourite,
  Pokemon,
}, defaultNavigationOptions);

FavouriteStack.navigationOptions = {
  tabBarLabel: 'Favourite',
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabBarIcon
      focused={focused}
      size={theme.components.tabBarIconSize}
      color={theme.colors.white}
      name="heart"
    />
  ),
};

export default FavouriteStack;
