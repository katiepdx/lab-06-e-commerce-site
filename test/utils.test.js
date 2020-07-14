import { findById } from '../common/utils.js';
// hard-coded data for items in cart
import { supplies } from '../data/supplies.js';
import { calcLineItem } from '../common/utils.js';

const test = QUnit.test;

test('it should take in an array and an id and findById function will return first item found matching the passed id', function(assert) {
    //Arrange
    // Parameters and arguments
    const itemId1 = 'spiralnotebook543';
    const itemId2 = 'happyballoon235';
    const catalog = supplies;
    const expectedId1 = catalog[0];    
    const expectedId2 = catalog[1];

    //Act 
    //Calling the function and setting the result to the const actual
    //Takes in cart item id and checks it against cart catalog 
    const actual1 = findById(catalog, itemId1);
    const actual2 = findById(catalog, itemId2);

    //Assert
    assert.equal(expectedId1, actual1);
    assert.equal(expectedId2, actual2);
});

test('tests for null case for findById function', function(assert) {
    //Arrange
    // Parameters and arguments
    const itemId1 = 'not found';
    const catalog = supplies;
    const expectedId1 = null;    

    //Act 
    const actual1 = findById(catalog, itemId1);

    //Assert
    assert.equal(expectedId1, actual1);
});


test('it should take in the cart qty and multiply it by catalog price to get item/line total price', function(assert) {
    //Arrange
    // Parameters and arguments
    const cartItemQuantity = 3;
    const catalogPrice = 2.99;
    const expectedTotalItemPrice = 8.97;

    //Act 
    // returns total price after running calcLineItem function
    const actual1 = calcLineItem(cartItemQuantity, catalogPrice);

    //Assert
    assert.equal(expectedTotalItemPrice, actual1);
});



