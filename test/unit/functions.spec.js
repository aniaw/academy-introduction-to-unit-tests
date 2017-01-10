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
        describe('when age is less than 18', function ()
        {
            it('should return 30', function ()
            {
                expect(functions.calculateDiscount(0)).toBe(30);
                expect(functions.calculateDiscount(17)).toBe(30);
            });
        });
        describe('when age is less then 100 but equal or more then 18 ', function ()
        {
            it('should return 10', function ()
            {
                expect(functions.calculateDiscount(18)).toBe(10);
                expect(functions.calculateDiscount(99)).toBe(10);
            });
        });
        describe('when age is equal 100', function ()
        {
            it('should return \'Entrance free\'', function ()
            {
                expect(functions.calculateDiscount(100)).toBe('Entrance free');
            });
        });
        describe('when age is incorrect', function ()
        {
            it('should return \'I think you gave an incorrect age!\'', function ()
            {
                expect(functions.calculateDiscount(102)).toBe('I think you gave an incorrect age!');
                expect(functions.calculateDiscount('hello')).toBe('I think you gave an incorrect age!');
            });
        });
    });
});
