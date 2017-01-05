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
        describe('when age is greater than or equal to 0 and age is less than to 18', function ()
        {
            it('should give 30', function ()
            {
                expect(functions.calculateDiscount(10)).toBe(30);

            });
        });
    });

    describe('calculateDiscount', function ()
    {
        describe('when age is greater than or equal to 18 and age is less than or equal to 99', function ()
        {
            it('should give 10', function ()
            {
                expect(functions.calculateDiscount(20)).toBe(10);
            });
        });
    });

    describe('calculateDiscount', function ()
    {
        describe('when age is equal 100', function ()
        {
            it('should return \'Entrance free\'', function ()
            {
                expect(functions.calculateDiscount(100)).toBe('Entrance free');

            });
        });
    });

    describe('calculateDiscount', function ()
    {
        describe('when age is less to 0 and age is greater to 100', function ()
        {
            it('should return \'I think you gave an incorrect age!\'', function ()
            {
                expect(functions.calculateDiscount(102)).toBe('I think you gave an incorrect age!');

            });
        });
    });
});
