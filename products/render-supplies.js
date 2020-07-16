import { getCart, findById } from '../common/utils.js';

export function renderSupplies(supplies) {
    const li = document.createElement('li');

    const category = supplies.category;
    li.classList.add(category);

    const h3 = document.createElement('h3');
    h3.textContent = supplies.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/${supplies.image}`;
    img.alt = `${supplies.name} image`;
    li.appendChild(img);

    const pElProductDescription = document.createElement('p');
    pElProductDescription.textContent = supplies.description;
    li.appendChild(pElProductDescription);

    const pElPrice = document.createElement('p');
    pElPrice.classList.add('price');
    pElPrice.textContent = `$${supplies.price.toFixed(2)}`;
    li.appendChild(pElPrice);

    const button = document.createElement('button');
    button.value = supplies.id;
    button.textContent = 'Add to Cart';
    //Add an event listener to the button 
    button.addEventListener('click', () => {
        //check if button works and gets item id for the item button clicked
        let cart = getCart();

        //getting the id for each item in cart
        let itemsInCart = findById(cart, supplies.id);

        //if cart item exists at 1 to quantity
        if (!itemsInCart) {
            const itemsInCart = {
                id: supplies.id,
                quantity: 1
            };
            cart.push(itemsInCart);

        } else {
            itemsInCart.quantity++;
            // else create new item object and initialize it to 1
            //add the newCartItem onto the cart object
        }
        //stringify the updated CART
        let updatedStringifiedCart = JSON.stringify(cart);

        //add it back into localStorage 
        localStorage.setItem('UPDATED CART', updatedStringifiedCart);
    });

    li.appendChild(button);

    return li;
}