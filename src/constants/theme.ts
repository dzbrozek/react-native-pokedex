import { ColorsInterface, ComponentsInterface, FontsInterface, LayoutInterface, ShapeInterface } from '../types/theme';

const layout: LayoutInterface = {
  padding: {
    md: 16,
    sm: 8,
    xs: 4,
  },
  hitSlop: {
    top: 12,
    left: 12,
    right: 12,
    bottom: 12,
  },
};

const colors: ColorsInterface = {
  red: '#CC0000',
  lightRed: '#E24242',
  black: '#222224',
  white: '#f0f0f0',
  lightGrey: 'lightgrey',
  blackGrey: '#505052',
  tabIconSelected: '#2f95dc',
  tabIconDefault: '#ccc',
};

const fonts: FontsInterface = {
  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
  thin: 'Roboto-Thin',

  lg: 18,
  md: 16,
  sm: 14,
  xl: 22,
};

const shape: ShapeInterface = {
  borderRadius: 5,
};

const components: ComponentsInterface = {
  tabBarIconSize: 22,
};

export default {
  layout,
  colors,
  fonts,
  shape,
  components,
};
