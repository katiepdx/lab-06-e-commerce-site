import { supplies } from '../data/supplies.js';
import { renderSupplies } from '../products/render-supplies.js';

// display li with id of supplies
const displayNewProducts = document.getElementById('supplies');

for (let i = 0; i < supplies.length; i++) {
    const suppliesList = supplies[i];
    const displayInDOM = renderSupplies(suppliesList);
    displayNewProducts.appendChild(displayInDOM);
}

