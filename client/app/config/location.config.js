function LocationConfig($locationProvider) {
    $locationProvider.html5Mode(true);
}

LocationConfig.$inject = [
    '$locationProvider',
];

angular.module('boykotvar.web').config(LocationConfig);
