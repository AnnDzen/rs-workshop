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


let currentCategory = 'coffee';
let isAllShown = false;
let currentProduct = null; 
const container = document.getElementById('products-container');
const tabs = document.querySelectorAll('.menu-tab');
const loadMoreBtn = document.getElementById('load-more-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalCloseBtn = document.getElementById('modal-close');
const sizeButtons = document.querySelectorAll('.size-btn');
const additivesButtons = document.querySelectorAll('.add-btn');


window.addEventListener('resize', () => {
  renderProducts();
});


function getCardsLimit() {
  return window.innerWidth <= 768 ? 4 : 8;
}

// пагинация !!!!! не забыть
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    isAllShown = true;
    renderProducts();
  });
}

// карточки
function createCardHtml(product) {
  return `
    <article class="menu_card" data-name="${product.name}">
        <div class="card_img"><img src="${product.image}" alt="${product.name}"></div>
        <div class="info_card">
            <h2 class="card_title">${product.name}</h2>
            <p class="about_card">${product.description}</p>
            <span class="card_price">$${product.price}</span>
        </div>
    </article>
  `;
}


function renderProducts() {
  const filteredProducts = products.filter(item => item.category === currentCategory);
  const limit = getCardsLimit();

  let productsToRender = filteredProducts;

  if (filteredProducts.length > limit && !isAllShown) {
    productsToRender = filteredProducts.slice(0, limit);
    if (loadMoreBtn) loadMoreBtn.classList.remove('hidden');
  } else {
    if (loadMoreBtn) loadMoreBtn.classList.add('hidden');
  }

  container.innerHTML = productsToRender.map(product => createCardHtml(product)).join('');
}




tabs.forEach(tab => {
  tab.addEventListener('click', function (event) {
    event.preventDefault();
    tabs.forEach(item => item.classList.remove('is-active'));
    this.classList.add('is-active');
    currentCategory = this.getAttribute('data-category');
    isAllShown = false;
    renderProducts();
  });
});




// стоимость по кликам


function calculateTotal() {
  if (!currentProduct) return;
  
  let totalPrice = parseFloat(currentProduct.price);
  const activeSizeBtn = document.querySelector('.size-btn.is-active');

  if (activeSizeBtn) {
    const size = activeSizeBtn.getAttribute('data-size');
    if (size === 'm') totalPrice += 0.50; 
    if (size === 'l') totalPrice += 1.00; 
  }

  
  const activeAdditivesCount = document.querySelectorAll('.add-btn.is-active').length;
  totalPrice += activeAdditivesCount * 0.50; 
  modalPrice.textContent = `$${totalPrice.toFixed(2)}`;
}

container.addEventListener('click', (event) => {
  const card = event.target.closest('.menu_card');
  if (!card) return;

  const productName = card.getAttribute('data-name');
  currentProduct = products.find(item => item.name === productName); 
  if (currentProduct) {
    modalImg.src = currentProduct.image;
    modalImg.alt = currentProduct.name;
    modalTitle.textContent = currentProduct.name;
    modalDescription.textContent = currentProduct.description;

    
    sizeButtons.forEach((btn, index) => {
      const sizeLabels = ["S", "M", "L"];
      btn.innerHTML = `<span class="size-circle">${sizeLabels[index]}</span> ${currentProduct.sizes[index]}`;
      btn.classList.remove('is-active');
    });
    
    const defaultSize = document.querySelector('.size-btn[data-size="s"]');
    if (defaultSize) defaultSize.classList.add('is-active');

   
    additivesButtons.forEach((btn, index) => {
      btn.innerHTML = `<span class="add-circle">${index + 1}</span> ${currentProduct.additives[index]}`;
      btn.classList.remove('is-active');
    });

  
    calculateTotal();

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
});


modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
});

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  currentProduct = null; 
}


sizeButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    sizeButtons.forEach(item => item.classList.remove('is-active')); 
    this.classList.add('is-active');
    calculateTotal();

  });
});


additivesButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    this.classList.toggle('is-active'); calculateTotal();

  });
});



renderProducts();