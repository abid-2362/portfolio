import { NavigatorScreenParams } from '@react-navigation/native';
import { CoffeeProduct } from './CoffeeShop/CoffeeProduct.ts';
import { RestaurantProduct } from './Restaurant/RestaurantProduct.ts';

export type CoffeeShopParamsList = {
  Home: undefined;
  Details: { product: CoffeeProduct };
};

export type RestaurantParamsList = {
  Home: undefined;
  Details: { product: RestaurantProduct };
  FullScreenProduct: { product: RestaurantProduct };
  Cart: undefined;
};

export type HomeNavigatorParamsList = {
  Home: undefined;
  Counter: undefined;
  Color: undefined;
  RGBPlayGround: undefined;
  Text: undefined;
  BoxScreen: undefined;
  CoffeeShopNavigator: NavigatorScreenParams<CoffeeShopParamsList>;
  RestaurantNavigator: NavigatorScreenParams<RestaurantParamsList>;
};

export type ActionType<PayloadType> = {
  type: string;
  payload?: PayloadType;
};
