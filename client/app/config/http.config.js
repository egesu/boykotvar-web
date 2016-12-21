function ApiAccessTokenInterceptor($q, Auth) {
    return {
        request: function(config) {
            if (Auth.token) {
                config.headers.Authentication = Auth.token;
            }

            return config || $q.when(config);
        },
        response: function(response) {
            if (response.data.data) {
                return response.data;
            } else {
                return response;
            }
        }
    };
}

function HttpProviderConfig($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.interceptors.push(ApiAccessTokenInterceptor);
}

ApiAccessTokenInterceptor.$inject = [
    '$q',
    'Auth',
];

HttpProviderConfig.$inject = [
    '$httpProvider',
];

angular.module('boykotvar.web').config(HttpProviderConfig);
