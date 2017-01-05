describe('functions', function ()
{
    'use strict';

    var functions = window.app;

    describe('divide', function ()
    {
        describe('when a and b are correct', function ()
        {
            it('should divide a by b', function ()
            {
                expect(functions.divide(6, 3)).toBe(2);

                //I need at least two test cases
                expect(functions.divide(12, 3)).toEqual(4);

            });
        });
        describe('when b is equal 0', function ()
        {
            it('should return \'You cannot divide by 0\' statement', function ()
            {
                expect(functions.divide(5, 0)).toBe('You cannot divide by 0');
            });
        });
    });

    describe('calculateDiscount', function ()
    {
        describe('when age is greater or equal than 0 and less than 18', function ()
        {
            it('should return discount 30', function ()
            {

                expect(functions.calculateDiscount(0)).toBe(30);
                expect(functions.calculateDiscount(10)).toBe(30);
                expect(functions.calculateDiscount(17)).toBe(30)
            });
        });
        describe('when age is greater than 18 and less or equal than 99', function ()
        {
            it('should return discount 10', function ()
            {
                expect(functions.calculateDiscount(18)).toBe(10);
                expect(functions.calculateDiscount(50)).toBe(10);
                expect(functions.calculateDiscount(99)).toBe(10);
            });
        });
        describe('when age is equal 100', function ()
        {
            it('should return \'entrance free\' ', function ()
            {
                expect(functions.calculateDiscount(100)).toBe('Entrance free')
            });
        });
        describe('when age is incorrect', function ()
        {
            it('should return \'I think you gave an incorrect age!\' ', function ()
            {
                expect(functions.calculateDiscount(-1)).toBe('I think you gave an incorrect age!');
                expect(functions.calculateDiscount(120)).toBe('I think you gave an incorrect age!');
                expect(functions.calculateDiscount(101)).toBe('I think you gave an incorrect age!')
            });
        });
    });
});
