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

export function calcLineItem(cartItemQuantity, catalogPrice) {
    let linePrice = cartItemQuantity * catalogPrice;
    let roundedLinePrice = Math.round(linePrice * 100) / 100;
    return roundedLinePrice;
}
