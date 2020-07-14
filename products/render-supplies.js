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
    li.appendChild(pElPrice);

    const button = document.createElement('button');
    button.value = supplies.id;
    button.textContent = 'Add to Cart';
    li.appendChild(button);

    return li;
}