function Concern(Resource) {
    var self = this;

    self.url = 'concern/:id';

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
        }
    );

    return self.resourceService;
}

Concern.$inject = [
    'Resource',
];

angular.module('boykotvar.concern')
    .factory('Concern', Concern);
