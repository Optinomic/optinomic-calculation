angular.module('optinomicCalculation').controller('HomeCtrl', function($scope, data, input, calculation) {


    // --------------------------------------------------
    // inject factory :: app_factory
    // init
    // --------------------------------------------------
    $scope.d = data;
    $scope.d.input = input;

    $scope.selectedTabIndex = 1;


    $scope.d.json_editor_options = { mode: 'tree' };

    $scope.d.timings = {};
    $scope.d.timings.start = performance.now();
    // --------------------------------------------------
    // Run Calculation
    // --------------------------------------------------
    $scope.d.output = calculation.main(input);
    $scope.d.timings.end = performance.now();
    $scope.d.timings.duration = $scope.d.timings.end - $scope.d.timings.start;

    console.log('Optinoic-Calculation :: ', $scope.d);

    $scope.changeOptions = function () {
        $scope.d.json_editor_options.mode = $scope.d.json_editor_options.mode == 'tree' ? 'code' : 'tree';
    };

});
