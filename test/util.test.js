const { add, minus } = require("../util/util");


describe('Add', () => {
    describe('Success', () => {
        it('Should return the sum of the 2 past arguments', () => {
            expect(add(2, 2)).toBe(4);
        });

    })
    describe('Failure', () => {
        it("Should throw an error if 1st argument isn't a num", () => {
            expect(() => add('2', 2)).toThrowError();
        });
        it("Should throw an error if 2nd argument isn't a num", () => {
            expect(() => add(2, '2')).toThrowError();
        });

    });
});

describe('Minus', () => {
    describe('Success', () => {
        it('Should return the less of the 2 past arguments', () => {
            expect(minus(3, 2)).toBe(1);
        });
    });
    describe('Failure', () => {
        it("Should throw an error if 1st argument isn't a num", () => {
            expect(() => minus('2', 2)).toThrowError();
        });
        it("Should throw an error if 2nd argument isn't a num", () => {
            expect(() => minus(2, '2')).toThrowError();
        });
    });
});