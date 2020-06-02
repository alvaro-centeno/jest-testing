const { add } = require("../util/util");

describe('Add', () => {
    describe('Success', () => {
        it('Should return the sum of the 2 past arguments', () => {
            expect(add(2, 2)).toBe(4);
        });

    })

});