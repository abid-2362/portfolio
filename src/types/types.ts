import { NavigatorScreenParams } from '@react-navigation/native';
import { CoffeeProduct } from './CoffeeShop/CoffeeProduct.ts';

export type CoffeeShopParamsList = {
  Home: undefined;
  Details: { product: CoffeeProduct };
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
