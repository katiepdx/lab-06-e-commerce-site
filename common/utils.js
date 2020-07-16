import { supplies } from '../data/supplies.js';

export function findById(catalogItem, cartItemId) {
    //Initialize item
    let itemMatch;
    for (let i = 0; i < catalogItem.length; i++) {
        if (cartItemId === catalogItem[i].id) {
            itemMatch = catalogItem[i];
            return itemMatch;
        }
    }
    return null;
}

export function calcLineItemTotal(cartItemQuantity, catalogPrice) {
    let linePrice = cartItemQuantity * catalogPrice;
    let roundedLinePrice = Math.round(linePrice * 100) / 100;
    return roundedLinePrice;
}

export function calcOrderTotal(itemsInCart, supplies) {
    let orderTotal = 0;
    
    for (let i = 0; i < itemsInCart.length; i++) {
        const lineItem = itemsInCart[i];
        const supplyItem = findById(supplies, lineItem.id);
        const lineTotal = calcLineItemTotal(lineItem.quantity, supplyItem.price);
        orderTotal = orderTotal + lineTotal;
        
    }
    return Math.round(orderTotal * 100) / 100;
}

export function getCart(){
    // retrieves CART from localStorage 
    const rawCart = localStorage.getItem('UPDATED CART');
    let cart;

    if (rawCart) {
        cart = JSON.parse(rawCart);
    } else {
        cart = [];
    }  
    return cart;
}

export function getCurrentCatalogItems(){
    // retrieves currentCatalogItems from localStorage 
    let rawCurrentCatalog = JSON.parse(localStorage.getItem('CURRENT CATALOG'));

    if (!rawCurrentCatalog) {
        //seed the catalog with starter items in local storage 
        localStorage.setItem('CURRENT CATALOG', JSON.stringify(supplies));

        //now set items to be the starter fruits in local storage 
        rawCurrentCatalog = JSON.parse(localStorage.getItem('CURRENT CATALOG'));
    }
    return rawCurrentCatalog;
}