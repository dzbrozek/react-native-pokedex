export interface LayoutInterface {
  padding: {
    md: number,
    sm: number,
    xs: number,
  };
  hitSlop: {
    top: number,
    left: number,
    right: number,
    bottom: number,
  };
}

export interface ColorsInterface {
  red: string;
  lightRed: string;
  black: string;
  white: string;
  lightGrey: string;
  blackGrey: string;
  tabIconSelected: string;
  tabIconDefault: string;
}

export interface FontsInterface {
  regular: string;
  bold: string;
  thin: string;

  lg: number;
  md: number;
  sm: number;
  xl: number;
}

export interface ShapeInterface {
  borderRadius: number;
}

export interface ComponentsInterface {
  tabBarIconSize: number;
}

export default interface ThemeInterface {
  layout: LayoutInterface;
  colors: ColorsInterface;
  fonts: FontsInterface;
  shape: ShapeInterface;
  components: ComponentsInterface;
}
