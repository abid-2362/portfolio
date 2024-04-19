import { RestaurantProduct } from '../../types/Restaurant/RestaurantProduct.ts';

const restaurantProducts: RestaurantProduct[] = [
  {
    id: 'product-1',
    name: 'Grilled Salmon with Lemon Butter Sauce',
    description:
      "Delight your taste buds with our succulent Grilled Salmon, perfectly seasoned and served with a luscious lemon butter sauce. Accompanied by a side of roasted vegetables and your choice of starch, it's a flavorful and wholesome dish that's sure to satisfy.",
    price: 19.99,
    category: 'Seafood',
    image: require('../../assets/images/restaurant/product-1.jpeg'),
    ingredients: [
      'Fresh salmon fillet',
      'Lemon',
      'Butter',
      'Salt',
      'Pepper',
      'Olive oil',
      'Assorted vegetables',
      'Starch (rice, potatoes, or pasta)',
    ],
    allergen_info: ['Contains fish', 'May contain traces of dairy'],
    preparation_time: '30 minutes',
    nutrition_info: {
      calories: 350,
      fat: 20,
      protein: 30,
      carbohydrates: 10,
    },
    chef_recommendation: true,
    serving_size: '1 portion',
    special_instructions:
      'Please specify preferred cooking temperature for the salmon (e.g., rare, medium, well-done).',
  },
  {
    id: 'product-2',
    name: 'Classic Margherita Pizza',
    description:
      "Experience the timeless flavors of Italy with our Classic Margherita Pizza. Topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil, it's a simple yet satisfying dish that captures the essence of Italian cuisine.",
    price: 14.99,
    category: 'Pizza',
    image: require('../../assets/images/restaurant/product-2.jpeg'),
    ingredients: [
      'Pizza dough',
      'Tomato sauce',
      'Fresh tomatoes',
      'Mozzarella cheese',
      'Fresh basil leaves',
      'Olive oil',
      'Salt',
      'Pepper',
    ],
    allergen_info: ['Contains gluten', 'Contains dairy'],
    preparation_time: '25 minutes',
    nutrition_info: {
      calories: 280,
      fat: 12,
      protein: 10,
      carbohydrates: 35,
    },
    chef_recommendation: false,
    serving_size: '1 pizza (8 slices)',
    special_instructions: 'Additional toppings available upon request.',
  },
  {
    id: 'product-3',
    name: 'Spaghetti Bolognese',
    description:
      "Treat yourself to the ultimate comfort food with our Spaghetti Bolognese. Featuring al dente spaghetti pasta smothered in a rich and savory meat sauce, it's a classic Italian dish that never fails to satisfy.",
    price: 16.99,
    category: 'Pasta',
    image: require('../../assets/images/restaurant/product-3.jpeg'),
    ingredients: [
      'Spaghetti pasta',
      'Ground beef',
      'Tomato sauce',
      'Onion',
      'Garlic',
      'Carrots',
      'Celery',
      'Parmesan cheese',
      'Olive oil',
      'Salt',
      'Pepper',
    ],
    allergen_info: ['Contains gluten', 'Contains dairy'],
    preparation_time: '35 minutes',
    nutrition_info: {
      calories: 420,
      fat: 18,
      protein: 25,
      carbohydrates: 40,
    },
    chef_recommendation: false,
    serving_size: '1 plate',
    special_instructions: 'Available with vegetarian or vegan meat substitute upon request.',
  },
  {
    id: 'product-4',
    name: 'Crispy Chicken Caesar Salad',
    description:
      'Enjoy a refreshing and satisfying meal with our Crispy Chicken Caesar Salad. Crisp romaine lettuce, tender grilled chicken breast, crunchy croutons, and tangy Caesar dressing come together to create a classic favorite.',
    price: 12.99,
    category: 'Salad',
    image: require('../../assets/images/restaurant/product-4.jpeg'),
    ingredients: ['Romaine lettuce', 'Grilled chicken breast', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
    allergen_info: ['Contains gluten', 'Contains dairy'],
    preparation_time: '20 minutes',
    nutrition_info: {
      calories: 320,
      fat: 18,
      protein: 30,
      carbohydrates: 15,
    },
    chef_recommendation: true,
    serving_size: '1 salad bowl',
    special_instructions: 'Available with grilled shrimp or tofu instead of chicken.',
  },
  {
    id: 'product-5',
    name: 'Beef Burger with Caramelized Onions',
    description:
      "Sink your teeth into our juicy Beef Burger topped with caramelized onions for a burst of flavor in every bite. Served on a toasted brioche bun with lettuce, tomato, and your choice of side, it's a classic favorite done right.",
    price: 13.99,
    category: 'Burger',
    image: require('../../assets/images/restaurant/product-5.jpeg'),
    ingredients: [
      'Beef patty',
      'Brioche bun',
      'Caramelized onions',
      'Lettuce',
      'Tomato',
      'Pickles',
      'Cheese (optional)',
      'Ketchup',
      'Mustard',
      'Mayonnaise',
    ],
    allergen_info: ['Contains gluten', 'Contains dairy'],
    preparation_time: '25 minutes',
    nutrition_info: {
      calories: 550,
      fat: 30,
      protein: 25,
      carbohydrates: 40,
    },
    chef_recommendation: false,
    serving_size: '1 burger',
    special_instructions: 'Available with a gluten-free bun upon request.',
  },
  {
    id: 'product-6',
    name: 'Vegetarian Pad Thai',
    description:
      'Experience the vibrant flavors of Thailand with our Vegetarian Pad Thai. Stir-fried rice noodles with tofu, bean sprouts, peanuts, and a tangy tamarind sauce create a satisfying and aromatic dish.',
    price: 15.99,
    category: 'Asian',
    image: require('../../assets/images/restaurant/product-6.jpeg'),
    ingredients: [
      'Rice noodles',
      'Tofu',
      'Bean sprouts',
      'Carrots',
      'Green onions',
      'Peanuts',
      'Egg (optional)',
      'Tamarind sauce',
      'Soy sauce',
      'Lime',
    ],
    allergen_info: ['Contains peanuts', 'Contains soy'],
    preparation_time: '30 minutes',
    nutrition_info: {
      calories: 380,
      fat: 15,
      protein: 20,
      carbohydrates: 45,
    },
    chef_recommendation: false,
    serving_size: '1 plate',
    special_instructions: 'Available with chicken or shrimp instead of tofu.',
  },
  {
    id: 'product-7',
    name: 'Gourmet Cheese Platter',
    description:
      "Indulge in a selection of artisanal cheeses paired with fresh fruits, nuts, and artisanal crackers with our Gourmet Cheese Platter. Perfect for sharing or enjoying as an appetizer, it's a sophisticated choice for any occasion.",
    price: 18.99,
    category: 'Appetizer',
    image: require('../../assets/images/restaurant/product-7.jpeg'),
    ingredients: [
      'Assorted cheeses (e.g., Brie, Gouda, Blue cheese)',
      'Fresh fruits (e.g., grapes, apples)',
      'Nuts (e.g., almonds, walnuts)',
      'Artisanal crackers',
    ],
    allergen_info: ['Contains dairy', 'Contains nuts'],
    preparation_time: '15 minutes',
    nutrition_info: {
      calories: 250,
      fat: 18,
      protein: 10,
      carbohydrates: 15,
    },
    chef_recommendation: true,
    serving_size: '1 platter',
    special_instructions: 'Can be customized to include additional cheeses or accompaniments.',
  },
  {
    id: 'product-8',
    name: 'Lemon Garlic Shrimp Scampi',
    description:
      "Tantalize your taste buds with our Lemon Garlic Shrimp Scampi. Succulent shrimp sautéed in a zesty lemon garlic butter sauce, served over a bed of linguine pasta, it's a classic Italian dish that's bursting with flavor.",
    price: 22.99,
    category: 'Seafood',
    image: require('../../assets/images/restaurant/product-8.jpeg'),
    ingredients: ['Shrimp', 'Linguine pasta', 'Garlic', 'Butter', 'Lemon', 'White wine', 'Parsley', 'Salt', 'Pepper'],
    allergen_info: ['Contains shellfish', 'Contains gluten', 'Contains dairy'],
    preparation_time: '35 minutes',
    nutrition_info: {
      calories: 420,
      fat: 22,
      protein: 25,
      carbohydrates: 30,
    },
    chef_recommendation: true,
    serving_size: '1 plate',
    special_instructions: 'Available with gluten-free pasta upon request.',
  },
  {
    id: 'product-9',
    name: 'Chicken Alfredo Pasta',
    description:
      "Satisfy your cravings with our creamy Chicken Alfredo Pasta. Tender grilled chicken breast served over fettuccine noodles tossed in a rich and velvety Alfredo sauce, it's a decadent dish that's sure to please.",
    price: 17.99,
    category: 'Pasta',
    image: require('../../assets/images/restaurant/product-9.jpeg'),
    ingredients: [
      'Fettuccine pasta',
      'Grilled chicken breast',
      'Heavy cream',
      'Parmesan cheese',
      'Garlic',
      'Butter',
      'Salt',
      'Pepper',
      'Parsley',
    ],
    allergen_info: ['Contains gluten', 'Contains dairy'],
    preparation_time: '30 minutes',
    nutrition_info: {
      calories: 480,
      fat: 25,
      protein: 30,
      carbohydrates: 35,
    },
    chef_recommendation: false,
    serving_size: '1 plate',
    special_instructions: 'Available with gluten-free pasta upon request.',
  },
  {
    id: 'product-10',
    name: 'Mushroom Risotto',
    description:
      "Experience the creamy richness of our Mushroom Risotto. Arborio rice simmered in a flavorful mushroom broth, finished with Parmesan cheese and a drizzle of truffle oil, it's a comforting and indulgent dish that's perfect for any occasion.",
    price: 16.99,
    category: 'Italian',
    image: require('../../assets/images/restaurant/product-10.jpeg'),
    ingredients: [
      'Arborio rice',
      'Mushrooms',
      'Onion',
      'Garlic',
      'Vegetable broth',
      'White wine',
      'Parmesan cheese',
      'Butter',
      'Truffle oil',
      'Salt',
      'Pepper',
      'Parsley',
    ],
    allergen_info: ['Contains gluten', 'Contains dairy'],
    preparation_time: '40 minutes',
    nutrition_info: {
      calories: 380,
      fat: 15,
      protein: 10,
      carbohydrates: 50,
    },
    chef_recommendation: true,
    serving_size: '1 plate',
    special_instructions: 'Can be made vegan upon request.',
  },
  {
    id: 'product-11',
    name: 'Filet Mignon',
    description:
      "Indulge in the ultimate steak experience with our tender and juicy Filet Mignon. Grilled to perfection and served with your choice of sauce, it's a luxurious treat for any steak lover.",
    price: 29.99,
    category: 'Steak',
    image: require('../../assets/images/restaurant/product-11.jpeg'),
    ingredients: [
      'Filet mignon steak',
      'Salt',
      'Pepper',
      'Olive oil',
      'Choice of sauce (e.g., peppercorn, mushroom, red wine demi-glace)',
    ],
    allergen_info: [],
    preparation_time: '25 minutes',
    nutrition_info: {
      calories: 450,
      fat: 25,
      protein: 35,
      carbohydrates: 0,
    },
    chef_recommendation: true,
    serving_size: '1 steak',
    special_instructions: 'Available with a side of mashed potatoes, vegetables, or salad.',
  },
  {
    id: 'product-12',
    name: 'Caprese Salad',
    description:
      "Enjoy the simplicity of our refreshing Caprese Salad. Sliced tomatoes, fresh mozzarella cheese, and basil leaves drizzled with balsamic glaze, it's a light and flavorful appetizer that celebrates the essence of Italian cuisine.",
    price: 10.99,
    category: 'Salad',
    image: require('../../assets/images/restaurant/product-12.jpeg'),
    ingredients: ['Tomatoes', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Balsamic glaze', 'Salt', 'Pepper'],
    allergen_info: ['Contains dairy'],
    preparation_time: '15 minutes',
    nutrition_info: {
      calories: 200,
      fat: 15,
      protein: 10,
      carbohydrates: 10,
    },
    chef_recommendation: false,
    serving_size: '1 plate',
    special_instructions: 'Can be made vegan with dairy-free cheese upon request.',
  },
  {
    id: 'product-13',
    name: 'Vegetable Stir-Fry',
    description:
      "Savor the vibrant flavors of our Vegetable Stir-Fry. Crisp vegetables sautéed in a savory sauce, served over a bed of fluffy rice, it's a wholesome and satisfying dish that's perfect for vegetarians and vegans alike.",
    price: 14.99,
    category: 'Asian',
    image: require('../../assets/images/restaurant/product-13.jpeg'),
    ingredients: [
      'Assorted vegetables (e.g., bell peppers, broccoli, carrots, snap peas)',
      'Tofu',
      'Garlic',
      'Ginger',
      'Soy sauce',
      'Sesame oil',
      'Rice vinegar',
      'Brown sugar',
      'Cornstarch',
      'Rice',
    ],
    allergen_info: ['Contains soy'],
    preparation_time: '30 minutes',
    nutrition_info: {
      calories: 300,
      fat: 10,
      protein: 15,
      carbohydrates: 45,
    },
    chef_recommendation: false,
    serving_size: '1 plate',
    special_instructions: 'Can be made gluten-free upon request.',
  },
  {
    id: 'product-14',
    name: 'Chicken Tikka Masala',
    description:
      "Transport your taste buds to India with our flavorful Chicken Tikka Masala. Tender pieces of chicken simmered in a creamy tomato sauce with aromatic spices, it's a delicious and satisfying dish that pairs perfectly with naan bread or rice.",
    price: 18.99,
    category: 'Indian',
    image: require('../../assets/images/restaurant/product-14.jpeg'),
    ingredients: [
      'Chicken breast',
      'Tomatoes',
      'Onion',
      'Garlic',
      'Ginger',
      'Yogurt',
      'Heavy cream',
      'Garam masala',
      'Turmeric',
      'Cumin',
      'Coriander',
      'Paprika',
      'Cayenne pepper',
      'Basmati rice',
    ],
    allergen_info: ['Contains dairy'],
    preparation_time: '40 minutes',
    nutrition_info: {
      calories: 420,
      fat: 20,
      protein: 30,
      carbohydrates: 35,
    },
    chef_recommendation: true,
    serving_size: '1 plate',
    special_instructions: 'Can be made spicy or mild according to preference.',
  },
  {
    id: 'product-15',
    name: 'Vegetable Lasagna',
    description:
      "Indulge in the comforting layers of our Vegetable Lasagna. Rich marinara sauce, creamy béchamel, and a medley of vegetables nestled between tender lasagna noodles, it's a vegetarian delight that's perfect for any occasion.",
    price: 16.99,
    category: 'Italian',
    image: require('../../assets/images/restaurant/product-15.jpeg'),
    ingredients: [
      'Lasagna noodles',
      'Marinara sauce',
      'Béchamel sauce',
      'Assorted vegetables (e.g., spinach, zucchini, mushrooms)',
      'Ricotta cheese',
      'Mozzarella cheese',
      'Parmesan cheese',
      'Garlic',
      'Olive oil',
      'Salt',
      'Pepper',
      'Basil',
    ],
    allergen_info: ['Contains gluten', 'Contains dairy'],
    preparation_time: '45 minutes',
    nutrition_info: {
      calories: 380,
      fat: 18,
      protein: 20,
      carbohydrates: 35,
    },
    chef_recommendation: false,
    serving_size: '1 slice',
    special_instructions: 'Can be made vegan upon request.',
  },
  {
    id: 'product-16',
    name: 'Beef Tacos',
    description:
      "Satisfy your cravings with our mouthwatering Beef Tacos. Seasoned ground beef, fresh salsa, shredded lettuce, and tangy sour cream wrapped in warm tortillas, it's a classic favorite that's perfect for any fiesta.",
    price: 13.99,
    category: 'Mexican',
    image: require('../../assets/images/restaurant/product-16.jpeg'),
    ingredients: [
      'Ground beef',
      'Tortillas',
      'Tomatoes',
      'Onion',
      'Lettuce',
      'Cheese',
      'Sour cream',
      'Cilantro',
      'Lime',
      'Taco seasoning',
    ],
    allergen_info: ['Contains gluten', 'Contains dairy'],
    preparation_time: '30 minutes',
    nutrition_info: {
      calories: 350,
      fat: 18,
      protein: 25,
      carbohydrates: 30,
    },
    chef_recommendation: true,
    serving_size: '2 tacos',
    special_instructions: 'Available with chicken or tofu instead of beef.',
  },
  {
    id: 'product-17',
    name: 'Pesto Pasta Salad',
    description:
      "Enjoy a taste of Italy with our vibrant Pesto Pasta Salad. Al dente pasta tossed with homemade basil pesto, cherry tomatoes, fresh mozzarella, and pine nuts, it's a refreshing and flavorful dish that's perfect for picnics and gatherings.",
    price: 12.99,
    category: 'Salad',
    image: require('../../assets/images/restaurant/product-17.jpeg'),
    ingredients: [
      'Pasta (e.g., fusilli, penne)',
      'Basil pesto',
      'Cherry tomatoes',
      'Fresh mozzarella balls',
      'Pine nuts',
      'Olive oil',
      'Lemon juice',
      'Garlic',
      'Salt',
      'Pepper',
    ],
    allergen_info: ['Contains gluten', 'Contains dairy', 'Contains nuts'],
    preparation_time: '25 minutes',
    nutrition_info: {
      calories: 280,
      fat: 15,
      protein: 10,
      carbohydrates: 30,
    },
    chef_recommendation: false,
    serving_size: '1 bowl',
    special_instructions: 'Available with gluten-free pasta upon request.',
  },
  {
    id: 'product-18',
    name: 'Chicken Quesadillas',
    description:
      "Sink your teeth into our cheesy Chicken Quesadillas. Grilled chicken, melted cheese, and sautéed vegetables folded into warm tortillas and served with salsa and sour cream, it's a crowd-pleasing favorite for any occasion.",
    price: 11.99,
    category: 'Mexican',
    image: require('../../assets/images/restaurant/product-18.jpeg'),
    ingredients: [
      'Grilled chicken breast',
      'Tortillas',
      'Cheese',
      'Bell peppers',
      'Onion',
      'Salsa',
      'Sour cream',
      'Guacamole',
      'Cilantro',
    ],
    allergen_info: ['Contains gluten', 'Contains dairy'],
    preparation_time: '20 minutes',
    nutrition_info: {
      calories: 320,
      fat: 18,
      protein: 25,
      carbohydrates: 25,
    },
    chef_recommendation: true,
    serving_size: '3 quesadillas',
    special_instructions: 'Available with vegetarian or vegan cheese upon request.',
  },
  {
    id: 'product-19',
    name: 'Shrimp Pad Thai',
    description:
      "Take your taste buds on a journey with our Shrimp Pad Thai. Stir-fried rice noodles with succulent shrimp, bean sprouts, peanuts, and a tangy tamarind sauce, it's a classic Thai dish that's bursting with flavor.",
    price: 17.99,
    category: 'Asian',
    image: require('../../assets/images/restaurant/product-19.jpeg'),
    ingredients: [
      'Rice noodles',
      'Shrimp',
      'Bean sprouts',
      'Carrots',
      'Green onions',
      'Peanuts',
      'Egg',
      'Tamarind sauce',
      'Soy sauce',
      'Lime',
    ],
    allergen_info: ['Contains shellfish', 'Contains peanuts', 'Contains soy'],
    preparation_time: '35 minutes',
    nutrition_info: {
      calories: 400,
      fat: 15,
      protein: 20,
      carbohydrates: 45,
    },
    chef_recommendation: false,
    serving_size: '1 plate',
    special_instructions: 'Available with chicken or tofu instead of shrimp.',
  },
  {
    id: 'product-20',
    name: 'Mediterranean Mezze Platter',
    description:
      'Experience the flavors of the Mediterranean with our Mezze Platter. Hummus, tzatziki, falafel, olives, feta cheese, and pita bread come together for a delightful assortment of Mediterranean delights.',
    price: 16.99,
    category: 'Appetizer',
    image: require('../../assets/images/restaurant/product-20.jpeg'),
    ingredients: ['Hummus', 'Tzatziki', 'Falafel', 'Olives', 'Feta cheese', 'Pita bread'],
    allergen_info: ['Contains gluten', 'Contains dairy'],
    preparation_time: '20 minutes',
    nutrition_info: {
      calories: 280,
      fat: 18,
      protein: 10,
      carbohydrates: 25,
    },
    chef_recommendation: true,
    serving_size: '1 platter',
    special_instructions: 'Can be made vegan upon request.',
  },
  {
    id: 'product-21',
    name: 'Vegetarian Buddha Bowl',
    description:
      'Nourish your body and soul with our Vegetarian Buddha Bowl. Quinoa, roasted vegetables, avocado, chickpeas, and a tangy tahini dressing come together in this vibrant and wholesome dish.',
    price: 14.99,
    category: 'Healthy',
    image: require('../../assets/images/restaurant/product-21.jpeg'),
    ingredients: [
      'Quinoa',
      'Roasted vegetables (e.g., sweet potatoes, broccoli, cauliflower)',
      'Avocado',
      'Chickpeas',
      'Tahini dressing',
      'Lemon',
      'Olive oil',
      'Salt',
      'Pepper',
    ],
    allergen_info: [],
    preparation_time: '30 minutes',
    nutrition_info: {
      calories: 380,
      fat: 20,
      protein: 15,
      carbohydrates: 40,
    },
    chef_recommendation: true,
    serving_size: '1 bowl',
    special_instructions: 'Can be made gluten-free upon request.',
  },
  {
    id: 'product-22',
    name: 'BBQ Pulled Pork Sandwich',
    description:
      "Satisfy your cravings with our hearty BBQ Pulled Pork Sandwich. Slow-cooked pulled pork smothered in tangy barbecue sauce, piled high on a toasted brioche bun, it's a comforting classic that hits all the right notes.",
    price: 13.99,
    category: 'Sandwich',
    image: require('../../assets/images/restaurant/product-22.jpeg'),
    ingredients: ['Pulled pork', 'Brioche bun', 'BBQ sauce', 'Coleslaw', 'Pickles', 'Onion', 'Cheddar cheese'],
    allergen_info: ['Contains gluten', 'Contains dairy'],
    preparation_time: '20 minutes',
    nutrition_info: {
      calories: 450,
      fat: 25,
      protein: 30,
      carbohydrates: 30,
    },
    chef_recommendation: true,
    serving_size: '1 sandwich',
    special_instructions: 'Available with a gluten-free bun upon request.',
  },
  {
    id: 'product-23',
    name: 'Beef Wellington',
    description:
      "Indulge in a culinary masterpiece with our Beef Wellington. Tender beef filet wrapped in mushroom duxelles and puff pastry, baked to golden perfection, it's a decadent dish fit for royalty.",
    price: 32.99,
    category: 'Gourmet',
    image: require('../../assets/images/restaurant/product-23.jpeg'),
    ingredients: [
      'Beef filet',
      'Mushrooms',
      'Puff pastry',
      'Dijon mustard',
      'Prosciutto',
      'Egg wash',
      'Salt',
      'Pepper',
    ],
    allergen_info: ['Contains gluten'],
    preparation_time: '45 minutes',
    nutrition_info: {
      calories: 550,
      fat: 35,
      protein: 40,
      carbohydrates: 20,
    },
    chef_recommendation: true,
    serving_size: '1 portion',
    special_instructions: 'Available with a side of roasted vegetables or mashed potatoes.',
  },
  {
    id: 'product-24',
    name: 'Greek Salad',
    description:
      "Experience the flavors of Greece with our refreshing Greek Salad. Crisp lettuce, juicy tomatoes, cucumbers, Kalamata olives, and tangy feta cheese tossed in a lemon herb vinaigrette, it's a light and flavorful dish that's perfect as an appetizer or side.",
    price: 9.99,
    category: 'Salad',
    image: require('../../assets/images/restaurant/product-24.jpeg'),
    ingredients: [
      'Lettuce',
      'Tomatoes',
      'Cucumbers',
      'Red onion',
      'Kalamata olives',
      'Feta cheese',
      'Oregano',
      'Lemon juice',
      'Olive oil',
      'Salt',
      'Pepper',
    ],
    allergen_info: ['Contains dairy'],
    preparation_time: '15 minutes',
    nutrition_info: {
      calories: 180,
      fat: 12,
      protein: 8,
      carbohydrates: 15,
    },
    chef_recommendation: false,
    serving_size: '1 plate',
    special_instructions: 'Can be made vegan without cheese upon request.',
  },
  {
    id: 'product-25',
    name: 'Vegetarian Chili',
    description:
      "Warm up with a bowl of our hearty Vegetarian Chili. Packed with beans, vegetables, and aromatic spices, it's a comforting and satisfying dish that's perfect for chilly days.",
    price: 11.99,
    category: 'Soup',
    image: require('../../assets/images/restaurant/product-25.jpeg'),
    ingredients: [
      'Kidney beans',
      'Black beans',
      'Tomatoes',
      'Bell peppers',
      'Onion',
      'Corn',
      'Garlic',
      'Chili powder',
      'Cumin',
      'Paprika',
      'Vegetable broth',
      'Olive oil',
      'Salt',
      'Pepper',
    ],
    allergen_info: [],
    preparation_time: '30 minutes',
    nutrition_info: {
      calories: 250,
      fat: 5,
      protein: 10,
      carbohydrates: 40,
    },
    chef_recommendation: true,
    serving_size: '1 bowl',
    special_instructions: 'Can be made vegan upon request.',
  },
  {
    id: 'product-26',
    name: 'Margherita Flatbread',
    description:
      "Experience the classic flavors of Italy with our Margherita Flatbread. Crispy flatbread topped with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil, it's a simple yet delicious appetizer or snack.",
    price: 10.99,
    category: 'Appetizer',
    image: require('../../assets/images/restaurant/product-26.jpeg'),
    ingredients: [
      'Flatbread',
      'Tomato sauce',
      'Fresh mozzarella cheese',
      'Basil leaves',
      'Olive oil',
      'Salt',
      'Pepper',
    ],
    allergen_info: ['Contains gluten', 'Contains dairy'],
    preparation_time: '15 minutes',
    nutrition_info: {
      calories: 200,
      fat: 10,
      protein: 8,
      carbohydrates: 20,
    },
    chef_recommendation: false,
    serving_size: '1 flatbread',
    special_instructions: 'Available with gluten-free crust upon request.',
  },
  {
    id: 'product-27',
    name: 'Thai Green Curry',
    description:
      "Transport your taste buds to Thailand with our fragrant Thai Green Curry. Tender chicken simmered in a creamy coconut curry sauce with bamboo shoots, bell peppers, and Thai basil, it's a flavorful and aromatic dish that's perfect with jasmine rice.",
    price: 18.99,
    category: 'Asian',
    image: require('../../assets/images/restaurant/product-27.jpeg'),
    ingredients: [
      'Chicken breast',
      'Coconut milk',
      'Thai green curry paste',
      'Bamboo shoots',
      'Bell peppers',
      'Thai basil',
      'Fish sauce',
      'Palm sugar',
      'Lime leaves',
      'Jasmine rice',
    ],
    allergen_info: [],
    preparation_time: '40 minutes',
    nutrition_info: {
      calories: 420,
      fat: 25,
      protein: 30,
      carbohydrates: 35,
    },
    chef_recommendation: true,
    serving_size: '1 plate',
    special_instructions: 'Can be made vegetarian with tofu instead of chicken.',
  },
  {
    id: 'product-28',
    name: 'Sushi Platter',
    description:
      "Embark on a culinary journey with our exquisite Sushi Platter. A selection of nigiri, sashimi, and maki rolls crafted with the freshest ingredients, it's a feast for the senses that's perfect for sharing.",
    price: 24.99,
    category: 'Japanese',
    image: require('../../assets/images/restaurant/product-28.jpeg'),
    ingredients: [
      'Assorted fish (e.g., tuna, salmon, yellowtail)',
      'Sushi rice',
      'Seaweed',
      'Cucumber',
      'Avocado',
      'Wasabi',
      'Soy sauce',
      'Pickled ginger',
    ],
    allergen_info: ['Contains fish'],
    preparation_time: '45 minutes',
    nutrition_info: {
      calories: 380,
      fat: 15,
      protein: 25,
      carbohydrates: 40,
    },
    chef_recommendation: true,
    serving_size: '1 platter',
    special_instructions: 'Can be customized to include specific sushi preferences.',
  },
];

export default restaurantProducts;
