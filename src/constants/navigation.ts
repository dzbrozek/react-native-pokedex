import { theme } from './index';
import { StackNavigatorConfig } from 'react-navigation';

export const defaultNavigationOptions: StackNavigatorConfig = {
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
};
