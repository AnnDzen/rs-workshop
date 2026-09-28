const products = [
  {
    name: "Irish coffee",
    description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: "7.00",
    image: "assets/coffee/coffee-1.svg",
    category: "coffee",
    sizes: ["200 ml", "300 ml", "400 ml"],
    additives: ["Sugar", "Cinnamon", "Syrup"]
  },
  {
    name: "Kahlua coffee",
    description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    price: "7.00",
    image: "assets/coffee/coffee-2.svg",
    category: "coffee",
    sizes: ["200 ml", "300 ml", "400 ml"],
    additives: ["Sugar", "Cinnamon", "Syrup"]
  },
  {
    name: "Honey raf",
    description: "Espresso with frothed milk, cream and aromatic honey",
    price: "5.00",
    image: "assets/coffee/coffee-3.svg",
    category: "coffee",
    sizes: ["200 ml", "300 ml", "400 ml"],
    additives: ["Sugar", "Cinnamon", "Syrup"]
  },
  {
    name: "Ice cappuccino",
    description: "Cappuccino with soft thick foam in summer version with ice",
    price: "5.00",
    image: "assets/coffee/coffee-4.svg",
    category: "coffee",
    sizes: ["200 ml", "300 ml", "400 ml"],
    additives: ["Sugar", "Cinnamon", "Syrup"]
  },
  {
    name: "Espresso",
    description: "Classic black coffee",
    price: "4.50",
    image: "assets/coffee/coffee-5.svg",
    category: "coffee",
    sizes: ["200 ml", "300 ml", "400 ml"],
    additives: ["Sugar", "Cinnamon", "Syrup"]
  },
  {
    name: "Latte",
    description: "Espresso coffee with the addition of steamed milk and dense milk foam",
    price: "5.50",
    image: "assets/coffee/coffee-6.svg",
    category: "coffee",
    sizes: ["200 ml", "300 ml", "400 ml"],
    additives: ["Sugar", "Cinnamon", "Syrup"]
  },
  {
    name: "Latte macchiato",
    description: "Espresso with frothed milk and chocolate",
    price: "5.50",
    image: "assets/coffee/coffee-7.svg",
    category: "coffee",
    sizes: ["200 ml", "300 ml", "400 ml"],
    additives: ["Sugar", "Cinnamon", "Syrup"]
  },
  {
    name: "Coffee with cognac",
    description: "Fragrant black coffee with cognac and whipped cream",
    price: "6.50",
    image: "assets/coffee/coffee-8.svg",
    category: "coffee",
    sizes: ["200 ml", "300 ml", "400 ml"],
    additives: ["Sugar", "Cinnamon", "Syrup"]
  },
  {
    name: "Moroccan",
    description: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    price: "4.50",
    image: "assets/tea/tea-1.svg",
    category: "tea",
    sizes: ["200 ml", "300 ml", "400 ml"],
    additives: ["Sugar", "Cinnamon", "Syrup"]
  },
  {
    name: "Ginger",
    description: "Original black tea with fresh ginger, lemon and honey",
    price: "5.00",
    image: "assets/tea/tea-2.svg",
    category: "tea",
    sizes: ["200 ml", "300 ml", "400 ml"],
    additives: ["Sugar", "Cinnamon", "Syrup"]
  },
  {
    name: "Cranberry",
    description: "Invigorating black tea with cranberry and honey",
    price: "5.00",
    image: "assets/tea/tea-3.svg",
    category: "tea",
    sizes: ["200 ml", "300 ml", "400 ml"],
    additives: ["Sugar", "Cinnamon", "Syrup"]
  },
  {
    name: "Sea buckthorn",
    description: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    price: "5.50",
    image: "assets/tea/tea-4.svg",
    category: "tea",
    sizes: ["200 ml", "300 ml", "400 ml"],
    additives: ["Sugar", "Cinnamon", "Syrup"]
  },
  {
    name: "Marble cheesecake",
    description: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    price: "3.50",
    image: "assets/desserts/dessert-1.svg",
    category: "dessert",
    sizes: ["50 g", "100 g", "200 g"],
    additives: ["Berries", "Nuts", "Jam"]
  },
  {
    name: "Red velvet",
    description: "Layer cake with cream cheese frosting",
    price: "4.00",
    image: "assets/desserts/dessert-2.svg",
    category: "dessert",
    sizes: ["50 g", "100 g", "200 g"],
    additives: ["Berries", "Nuts", "Jam"]
  },
  {
    name: "Cheesecakes",
    description: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    price: "4.50",
    image: "assets/desserts/dessert-3.svg",
    category: "dessert",
    sizes: ["50 g", "100 g", "200 g"],
    additives: ["Berries", "Nuts", "Jam"]
  },
  {
    name: "Creme brulee",
    description: "Delicate creamy dessert in a caramel basket with wild berries",
    price: "7.00",
    image: "assets/desserts/dessert-4.svg",
    category: "dessert",
    sizes: ["50 g", "100 g", "200 g"],
    additives: ["Berries", "Nuts", "Jam"]
  },
  {
    name: "Pancakes",
    description: "Tender pancakes with strawberry jam and fresh strawberries",
    price: "4.50",
    image: "assets/desserts/dessert-5.svg",
    category: "dessert",
    sizes: ["50 g", "100 g", "200 g"],
    additives: ["Berries", "Nuts", "Jam"]
  },
  {
    name: "Honey cake",
    description: "Classic honey cake with delicate custard",
    price: "4.50",
    image: "assets/desserts/dessert-6.svg",
    category: "dessert",
    sizes: ["50 g", "100 g", "200 g"],
    additives: ["Berries", "Nuts", "Jam"]
  },
  {
    name: "Chocolate cake",
    description: "Cake with hot chocolate filling and nuts with dried apricots",
    price: "5.50",
    image: "assets/desserts/dessert-7.svg",
    category: "dessert",
    sizes: ["50 g", "100 g", "200 g"],
    additives: ["Berries", "Nuts", "Jam"]
  },
  {
    name: "Black forest",
    description: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    price: "6.50",
    image: "assets/desserts/dessert-8.svg",
    category: "dessert",
    sizes: ["50 g", "100 g", "200 g"],
    additives: ["Berries", "Nuts", "Jam"]
  }
];


export default products;