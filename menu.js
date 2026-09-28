import products from './products.js';


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
  if (headerNav && headerNav.classList.contains('open')) {
    burgerToggle.classList.remove('open');
    headerNav.classList.remove('open');
    document.body.style.overflow = '';
  }
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

// бургер меню
const burgerToggle = document.getElementById('burger-toggle');
const headerNav = document.querySelector('.header_nav');
const navLinks = document.querySelectorAll('.items_list a');


burgerToggle.addEventListener('click', () => {

  burgerToggle.classList.toggle('open');
  headerNav.classList.toggle('open');

  if (headerNav.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {

    burgerToggle.classList.remove('open');
    headerNav.classList.remove('remove');
    headerNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});


// темная темка
const themeToggle = document.querySelector('.theme');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
}