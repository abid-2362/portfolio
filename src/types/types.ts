import { NavigatorScreenParams } from '@react-navigation/native';

export type CoffeeShopParamsList = {
  Home: undefined;
};

export type HomeNavigatorParamsList = {
  Home: undefined;
  Counter: undefined;
  Color: undefined;
  RGBPlayGround: undefined;
  Text: undefined;
  BoxScreen: undefined;
  CoffeeShopNavigator: NavigatorScreenParams<CoffeeShopParamsList>;
};
