import { getCurrentCatalogItems } from '../common/utils.js';
import { renderSupplies } from '../products/render-supplies.js';

// display li with id of supplies
const displayNewProducts = document.getElementById('supplies');

const currentCatalog = getCurrentCatalogItems();

for (let i = 0; i < currentCatalog.length; i++) {
    const suppliesList = currentCatalog[i];
    const displayInDOM = renderSupplies(suppliesList);
    displayNewProducts.appendChild(displayInDOM);
}

