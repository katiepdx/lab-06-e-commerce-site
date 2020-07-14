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

