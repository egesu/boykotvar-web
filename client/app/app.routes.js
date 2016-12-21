function AppRoutes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeController',
            controllerAs: 'home',
        })
        .when('/start-boycott', {
            templateUrl: 'boycott/start.html',
            controller: 'BoycottStartController',
            controllerAs: 'boycottStart',
        });
}

AppRoutes.$inject = [
    '$routeProvider',
];

angular.module('boykotvar.web').config(AppRoutes);
