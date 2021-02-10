const { expect } = require('@jest/globals');
const { validationCreditCard } = require('./creditCardValidation');

test('Should be True or False based on input', () => {
    const text = validationCreditCard('5103720192896460','ajay chowdary', '10/20', '122');

    expect(text).toBeFalsy
})