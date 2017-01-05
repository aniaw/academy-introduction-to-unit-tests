(function ()
{
    'use strict';

    window.app = {
        divide: function (a,b)
        {
            if (0 === b) {
                return 'You cannot divide by 0';
            }
            return a/b;
        },
        calculateDiscount: function (age)
        {
            if (age >=0 && age < 18){
                return 30;
            }
            else if (age >=18 && age <= 99) {
                return 10;
            }
            else if (age === 100){
                return 'Entrance free'
            }
            else {
                return 'I think you gave an incorrect age!';
            }
        }

    };
})();
