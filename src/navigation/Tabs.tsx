import { createBottomTabNavigator } from 'react-navigation';
import { theme } from '../constants';
import PokedexStack from './Pokedex';
import AboutStack from './About';
import FavouriteStack from './Favourite';

const Tabs = createBottomTabNavigator({
  PokedexStack,
  FavouriteStack,
  AboutStack,
}, {
  initialRouteName: 'FavouriteStack',
  tabBarOptions: {
    activeTintColor: theme.colors.white,
    activeBackgroundColor: theme.colors.red,
    inactiveTintColor: theme.colors.lightGrey,
    inactiveBackgroundColor: theme.colors.lightRed,
    showLabel: true,
    showIcon: true,
  },
});

export default Tabs;
