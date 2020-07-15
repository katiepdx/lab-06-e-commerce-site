import { itemsInCart } from '../data/cart.js';
import { supplies } from '../data/supplies.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import { renderLineItem } from '../shopping-cart/render-line-item.js';

// Items in cart list will go here
const tbody = document.querySelector('tbody');
// Order total goes here 
const orderTotalCell = document.getElementById('order-total');

// loop through the cart item data
for (let i = 0; i < itemsInCart.length; i++) {
    const lineItem = itemsInCart[i];
    const cartItem = findById(supplies, lineItem.id);
    const dom = renderLineItem(lineItem, cartItem);
    
    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(itemsInCart, supplies);
orderTotalCell.textContent = `$${orderTotal}`;