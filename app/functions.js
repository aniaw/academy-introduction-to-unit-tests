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
        }
    };
})();
