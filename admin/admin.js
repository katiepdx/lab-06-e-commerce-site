import { supplies } from '../data/supplies.js';

// Get DOM elements 
// get the form 
const inputForm = document.getElementById('new-item-form'); 

//add submit event listener to inputForm 
// e is event
inputForm.addEventListener('submit', (e) => {
    //prevent default behavior of form - no ENTER to submit
    e.preventDefault();

    const completedForm = new FormData(inputForm);

    const adminsNewItem = {
        // get new item data from completedForm on admin page
        id: completedForm.get('id'),
        name: completedForm.get('name'),
        image: completedForm.get('image'),
        description: completedForm.get('description'),
        category: completedForm.get('category'),
        price: Number(completedForm.get('price')),
    };

    const currentCatalogItems = supplies;
    currentCatalogItems.push(adminsNewItem);
    //check new item is pushed to currentCatalogItems
    console.log(currentCatalogItems);
});