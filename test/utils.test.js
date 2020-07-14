import { findById } from '../common/utils.js';
// hard-coded data for items in cart
import { itemsInCart } from '../data/cart.js';
import { supplies } from '../data/supplies.js';

const test = QUnit.test;

test('it should take in an array and an id and return first item found matching the passed id and if no match is found it returns null', function(assert) {
    //Arrange
    // Parameters and arguments
    const itemId1 = 'spiralnotebook543';
    const itemId2 = 'happyballoon235';
    const catalog = supplies;
    const expectedId1 = catalog[0];
    console.log(expectedId1);
    
    const expectedId2 = catalog[1];

    //Act 
    //Calling the function and setting the result to the const actual
    //Takes in cart item id and checks it against cart catalog 
    const actual1 = findById(catalog, itemId1);
    console.log(actual1);

    const actual2 = findById(catalog, itemId2);

    //Assert
    assert.equal(expectedId1, actual1);
    assert.equal(expectedId2, actual2);
});




