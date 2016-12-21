function User(Resource) {
    var self = this;
    self.url = 'user/:id';

    self.resourceService = Resource(
        self.url, {
            id: '@id',
        }, {
            query: {
                method: 'GET',
                url: self.url,
                isArray: true,
            },
            insert: {
                method: 'POST',
            },
            update: {
                method: 'PUT',
                params: {
                    id: 'me',
                },
            },
            current: {
                method: 'GET',
                params: {
                    id: 'current',
                },
            },
            login: {
                method: 'POST',
                url: self.url + '/login',
            },
            logout: {
                method: 'DELETE',
                url: self.url + '/login',
            },
        }
    );

    return self.resourceService;
}

User.$inject = [
    'Resource',
];

angular.module('boykotvar.web.user').factory('User', User);
