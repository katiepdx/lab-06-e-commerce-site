import { 
    findById, 
    calcOrderTotal, 
    getCart, 
    getCurrentCatalogItems } from '../common/utils.js';
import { renderLineItem } from '../shopping-cart/render-line-item.js';

// Items in cart list will go here
const tbody = document.querySelector('tbody');
// Order total goes here 
const orderTotalCell = document.getElementById('order-total');
// Get order button 
const orderButton = document.getElementById('place-order-button');

let itemsInCart = getCart();
let currentCatalog = getCurrentCatalogItems();

// loop through the cart item data
for (let i = 0; i < itemsInCart.length; i++) {
    const lineItem = itemsInCart[i];
    const cartItem = findById(currentCatalog, lineItem.id);
    const dom = renderLineItem(lineItem, cartItem);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(itemsInCart, currentCatalog);
orderTotalCell.textContent = `$${orderTotal}`;

if (orderTotal === 0) {
    orderButton.disabled = true;
}

// Place order alert 
orderButton.addEventListener('click', () => {
    //removes items from cart in localStorage
    localStorage.removeItem('UPDATED CART');
    // alerts user of items in the cart
    alert(JSON.stringify(itemsInCart, true, 2));
    // redirects user back to homepage
    window.location = '../';
});