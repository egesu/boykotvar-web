function Boycott(Resource) {
    var self = this;

    self.url = 'boycott/:id';

    self.resourceService = Resource(
        self.url, {
            id: '@id'
        }, {
            query: {
                method: 'GET',
                url: self.url,
                isArray: true
            },
            get: {
                method: 'GET',
                url: self.url
            },
            insert: {
                method: 'POST'
            }
        }
    );

    return self.resourceService;
}

Boycott.$inject = [
    'Resource',
];

angular.module('boykotvar.web.boycott')
    .factory('Boycott', Boycott);
