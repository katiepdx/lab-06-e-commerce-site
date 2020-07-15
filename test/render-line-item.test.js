import { supplies } from '../data/supplies.js';
import { findById } from '../common/utils.js';
import { renderLineItem } from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

test('renders a line item for supplies', function(assert) {
    // arrange
    const cartItem = {
        id: 'spiralnotebook543',
        quantity: 3
    };
    const spiralNotebook = findById(supplies, cartItem.id);
    const expected = '<tr><th>Spiral Notebook</th><td>3</td><td>$2.99</td><td>$8.97</td></tr>';

    // act
    const dom = renderLineItem(cartItem, spiralNotebook);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

