function ConcernMultipleDirective(Concern) {
    return {
        restrict: 'ACE',
        transclude: true,
        scope: {
            model: '=ngModel',
            allowClear: '@',
            required: '=ngRequired',
            id: '@dgId',
            ngChange: '&'
        },
        templateUrl: 'form-elements/concern/multiple.html',
        link: function(scope, element, attrs) {
            scope.attrs = attrs;
            scope.searchResults = [];

            scope.search = function(query) {
                var concerns = Concern.query({
                    q: query
                });

                concerns.$promise.then(
                    function success(response) {
                        scope.searchResults = response;

                        if (!response.length) {
                            // no concerns found. let's create one!
                            scope.searchResults.push({
                                id: query,
                                name: query,
                                userCreated: true,
                            });
                        }
                    }
                );

                return concerns.$promise;
            };
        }
    };
}

ConcernMultipleDirective.$inject = [
    'Concern',
];

angular.module('boykotvar.formElements')
    .directive('concernMultiple', ConcernMultipleDirective);
