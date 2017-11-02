angular.module('optinomicCalculation').factory('calculation', function() {

    var calculation = {};

    calculation.main = function(responses) {

        // Copy | Paste From here
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 




        var calc = {};


        calc.getAllVariantsList = function(current_dimension) {

            var list = [];

            // Liste aller Varianten erstellen
            for (var pos = 0; pos < current_dimension.length; pos++) {
                var dim_pos = current_dimension[pos].array;
                list[pos] = dim_pos;
            };

            // Build all Variants List
            var result = list[0].map(function(item) {
                return [item.id];
            });

            for (var k = 1; k < list.length; k++) {
                var next = [];
                result.forEach(function(item) {
                    list[k].forEach(function(word) {
                        var line = item.slice(0);
                        line.push(word.id);
                        next.push(line);
                    })
                });
                result = next;
            };

            return result;
        };

        // ------------------------------------------
        // F U N C T I O N  -  Main
        // ------------------------------------------
        calc.getResults = function(d) {

            var results = JSON.parse(JSON.stringify(d));
            var value = null;
            var variants = [];


            variants = calc.getAllVariantsList(results.dimensions);
            console.log('1.) variants', variants);

            variants.forEach(function(variants, variantsID) {
                var dive = results.data;
                variants.forEach(function(variant, variantID) {
                    dive = dive[variant];
                });
                console.log('2.) dive', variantsID, dive);

                // remove patients, scores
                if ((dive !== null) && (dive !== undefined)) {
                    if ("patients" in dive) {
                        delete dive.patients;
                    };
                    if ("scores" in dive) {
                        // remove patients, scores
                        delete dive.scores;
                    };
                };

            });


            return results;
        };


        return calc.getResults(responses);




        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        // Copy | Paste Until here

    };
    return calculation;
});
