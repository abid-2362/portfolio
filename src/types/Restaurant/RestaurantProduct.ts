export type RestaurantNutritionInfo = {
  calories: number;
  fat: number;
  protein: number;
  carbohydrates: number;
};
export type RestaurantProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: any;
  ingredients: string[];
  allergen_info: string[];
  preparation_time: string;
  nutrition_info: RestaurantNutritionInfo;
  chef_recommendation: boolean;
  serving_size: string;
  special_instructions: string;
};

export type RestaurantCartItem = RestaurantProduct & { qty: number };
