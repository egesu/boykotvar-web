function RequiredDirective() {
    return {
        restrict: 'E',
        template: '<span class="glyphicon glyphicon-asterisk text-danger"></span>',
    };
}

angular.module('boykotvar.formElements').directive('required', RequiredDirective);
