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
            it('should return 30', function ()
            {
                expect(functions.calculateDiscount(10)).toBe(30)
            });
            it('should return 10', function ()
            {
                expect(functions.calculateDiscount(20)).toBe(10);
            });
            it('should return message', function()
            {
                expect(functions.calculateDiscount(100)).toBe('Entrance free')

            });
        });
        describe('when number is false', function(){
            it('should return text', function ()
            {
                expect(functions.calculateDiscount(-1)).toBe('I think you gave an incorrect age!');
            });
        });
    });
});

