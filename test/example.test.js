// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;
import compareNumber from '../function.js/index.js';

test('should return zero if guess equals compareNumber', function(assert) {
    const guess = 2;
    const correctNumber = 2;

    const result = compareNumber(guess, correctNumber);

    assert.equal(result, 0);
});
test('should return -1 if guess less than compareNumber', function(assert) {
    const guess = 1;
    const correctNumber = 2;

    const result = compareNumber(guess, correctNumber);

    assert.equal(result, -1);
});
test('should return 1 if guess greater than compareNumber', function(assert) {
    const guess = 3;
    const correctNumber = 2;

    const result = compareNumber(guess, correctNumber);

    assert.equal(result, +1);
});


    
    //Arrange
    // Set up your parameters and expectations


    
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
   

