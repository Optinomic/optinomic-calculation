angular.module('optinomicCalculation', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'ngMaterial', 'ng.jsoneditor']);

angular.module('optinomicCalculation').config(function($routeProvider) {

    $routeProvider
        .when('/', {
            title: 'Home',
            templateUrl: 'partial/home/home.html'
        });

    /* Add New Routes Above */
    $routeProvider.otherwise({ redirectTo: '/' });

});

angular.module('optinomicCalculation').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
