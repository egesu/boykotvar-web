function Auth($q, $localStorage) {
    var service = {
            token: undefined,
        },
        self = this;

    self.init = function() {
        service.token = $localStorage.token || undefined;
    };

    service.setToken = function(token) {
        service.token = token;
        $localStorage.token = token;
    };

    service.getToken = function() {
        return service.token;
    };

    service.destroy = function() {
        delete $localStorage.token;
        service.token = undefined;
    };

    self.init();

    return service;
}

Auth.$inject = [
    '$q',
    '$localStorage',
];

angular.module('boykotvar.web.core').factory('Auth', Auth);
