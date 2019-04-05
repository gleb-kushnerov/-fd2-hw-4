(function () {
    'use strict';
    function _async(fnGen) {
        let generator = fnGen;
        function _next(value) {
            let nextResult = generator.next(value);
            if (nextResult.done) {
                return nextResult.value;
            }
            nextResult.value.then(_next);
        }
       _next();
    }
}());