const { expect } = require('@jest/globals');
const { validationCreditCard } = require('./creditCardValidation');

test('Should be False', () => {
    const text = validationCreditCard('5103720192896460','ajay chowdary', '10/20', '122');

    expect(text).toBeFalsy

})


test('should be truthy', () => {
    const text = validationCreditCard('5103720192896460','ajay chowdary', '10/25', '122');

    expect(text).toBeTruthy
})
