import { calcLineItemTotal } from '../common/utils.js';

export function renderLineItem(cartItem, catalogItem) {
    const tr = document.createElement('tr');

    const itemName = document.createElement('th');
    itemName.textContent = catalogItem.name;
    tr.appendChild(itemName);

    const itemQuantity = document.createElement('td');
    itemQuantity.textContent = cartItem.quantity;
    tr.appendChild(itemQuantity);

    const itemPrice = document.createElement('td');
    itemPrice.textContent = `$${catalogItem.price}`;
    tr.appendChild(itemPrice);

    const totalPrice = document.createElement('td');

    const itemTotal = calcLineItemTotal(cartItem.quantity, catalogItem.price);
    totalPrice.textContent = `$${itemTotal}`;
    tr.appendChild(totalPrice);

    return tr;
}