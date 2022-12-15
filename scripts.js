const menuEmail = document.querySelector('.navbar-email');
const profileMenu = document.querySelector('.profile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.shopping-cart1');
const arrow = document.querySelector('.arrow');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');
const productDetails = document.querySelector('.product-detail');
const closeButtonProductDetail = document.querySelector('.close-button');

//Event listeners
shoppingCartIcon.addEventListener('click', toggleAside);
menuEmail.addEventListener('click', toggleProfileMenu);
menuEmail.addEventListener('mouseover', arrowDown);
menuEmail.addEventListener('mouseout', arrowUp);
iconMenu.addEventListener('click', toggleMobileMenu);
closeButtonProductDetail.addEventListener('click', closeProductDetail);

function toggleAside() {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    profileMenu.classList.add('inactive');
    productDetails.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    productDetails.classList.remove('inactive');
}

function toggleProfileMenu() {
    profileMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    productDetails.classList.add('inactive');
    aside.classList.add('inactive');
}

function openProduct() {
    productDetails.classList.remove('inactive');
    aside.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    profileMenu.classList.add('inactive');
}

function closeProductDetail() {
    productDetails.classList.add('inactive');
}

function arrowDown() {    
    arrow.style.transform = 'rotate(90deg)';
}
function arrowUp() {
    arrow.style.transform = 'rotate(0deg)';
}


//------------------array of products------------------//

const productList = [];

//Products
productList.push({
    name: 'Facial oil',
    price: 40,
    image: "https://images.pexels.com/photos/11124449/pexels-photo-11124449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Watermelon oil',
    price: 50,
    image: "https://images.pexels.com/photos/11124445/pexels-photo-11124445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Tonic',
    price: 25,
    image: "https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Take Care Bundle',
    price: 60,
    image: "https://images.pexels.com/photos/8128063/pexels-photo-8128063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Facial oil',
    price: 40,
    image: "https://images.pexels.com/photos/11124449/pexels-photo-11124449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Watermelon oil',
    price: 50,
    image: "https://images.pexels.com/photos/11124445/pexels-photo-11124445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Tonic',
    price: 25,
    image: "https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Take Care Bundle',
    price: 60,
    image: "https://images.pexels.com/photos/8128063/pexels-photo-8128063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Facial oil',
    price: 40,
    image: "https://images.pexels.com/photos/11124449/pexels-photo-11124449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Watermelon oil',
    price: 50,
    image: "https://images.pexels.com/photos/11124445/pexels-photo-11124445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Tonic',
    price: 25,
    image: "https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Take Care Bundle',
    price: 60,
    image: "https://images.pexels.com/photos/8128063/pexels-photo-8128063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Facial oil',
    price: 40,
    image: "https://images.pexels.com/photos/11124449/pexels-photo-11124449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Watermelon oil',
    price: 50,
    image: "https://images.pexels.com/photos/11124445/pexels-photo-11124445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Tonic',
    price: 25,
    image: "https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Take Care Bundle',
    price: 60,
    image: "https://images.pexels.com/photos/8128063/pexels-photo-8128063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

//----------loop for products----------//


function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.classList.add('product-image');
        productImage.addEventListener('click', openProduct);
    
        const productInfoDiv = document.createElement('div');
        productInfoDiv.classList.add('product-info');
    

        const productInfoP = document.createElement('div');
        productInfoP.classList.add('product-info-p');

        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.price;
        productPrice.classList.add('product-price');
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoP.append(productName, productPrice)
    
        const productInfoFigure = document.createElement('figure');
        const productInfoImg = document.createElement('img');
        productInfoImg.setAttribute('src', '/assets/img/icons/bt_add_to_cart.svg');
        productInfoImg.classList.add('add-to-cart');
    
        productInfoDiv.appendChild(productInfoP);
        productInfoDiv.appendChild(productInfoImg);
        productInfoDiv.appendChild(productInfoFigure);
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfoDiv);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);