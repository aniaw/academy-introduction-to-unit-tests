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
        describe('when number is okey', function ()
        {
            it('should number is less than 18', function ()
            {
                expect(functions.calculateDiscount(10)).toBe(30)
            });
            it('should number is less than 99 but bigger than 18', function ()
            {
                expect(functions.calculateDiscount(20)).toBe(10);
            });
            it('should be number 100', function()
            {
                expect(functions.calculateDiscount(100)).toBe('Entrance free')
            });
        });
        describe('when number in no okey', function(){
            it('should be a text', function ()
            {
                expect(functions.calculateDiscount(-1)).toBe('I think you gave an incorrect age!');
            });
        });
    });
});

