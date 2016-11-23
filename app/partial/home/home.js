angular.module('optinomicCalculation').controller('HomeCtrl', function($scope, data, input, calculation) {


    // --------------------------------------------------
    // inject factory :: app_factory
    // --------------------------------------------------
    $scope.d = data;
    $scope.d.input = input;

    $scope.selectedTabIndex = 1;


    console.log('Optinoic-Calculation :: ', $scope.d);


});
