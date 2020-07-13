// IMPORT MODULES under test here:
import supplies from '../data/supplies.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // notebook object
    const spiralNotebook {
        id: 'spiralnotebook543',
        name: 'Spiral Notebook',
        image: 'spiral-notebook-product.jpg',
        description: 'A small A5 blank top spiral notebook',
        category: 'paper-supplies',
        price: 2.99
    };

    // outerHTML
    const expected = '<li class="paper-supplies"><h3>Spiral Notebook</h3><img src="../assets/spiral-notebook-product.jpg" alt="image of a spiral notebook"><p>A small A5 blank top spiral notebook</p><p class="price">Price:  <span id="notebook-price"></span></p><button value="spiralnotebook543">Add to Cart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
