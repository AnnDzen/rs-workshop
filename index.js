const slidesData = [
    {
        img: "assets/coffee-slider-1.svg",
        title: "S’mores Frappuccino",
        description: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
        price: "$5.50"
    },
    {
        img: "assets/coffee-slider-2.svg",
        title: "Caramel Macchiato",
        description: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
        price: "$5.00"
    },
    {
        img: "assets/coffee-slider-3.svg",
        title: "Ice coffee",
        description: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
        price: "$4.50"
    }
];


let currentSlideIndex = 0;


const slideImg = document.getElementById('slide-img');
const slideTitle = document.getElementById('slide-title');
const slideDescription = document.getElementById('slide-description');
const slidePrice = document.getElementById('slide-price');
const btnPrev = document.getElementById('slider-prev');
const btnNext = document.getElementById('slider-next');
const indicators = document.querySelectorAll('.slider_indicator');


function updateSlider() {
    const currentData = slidesData[currentSlideIndex];


    slideImg.src = currentData.img;
    slideImg.alt = currentData.title;
    slideTitle.textContent = currentData.title;
    slideDescription.textContent = currentData.description;
    slidePrice.textContent = currentData.price;


    indicators.forEach((indicator, index) => {
        if (index === currentSlideIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}


btnNext.addEventListener('click', () => {
    currentSlideIndex++;
    if (currentSlideIndex >= slidesData.length) {
        currentSlideIndex = 0;
    }
    updateSlider();
});


btnPrev.addEventListener('click', () => {
    currentSlideIndex--;

    if (currentSlideIndex < 0) {
        currentSlideIndex = slidesData.length - 1;
    }
    updateSlider();
});


indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlideIndex = index;
        updateSlider();
    });
});

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


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (headerNav && headerNav.classList.contains('open')) {
            burgerToggle.classList.remove('open');
            headerNav.classList.remove('open');
            document.body.style.overflow = '';
        }

    }
});