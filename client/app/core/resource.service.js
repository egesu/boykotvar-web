/**
 * @ngdoc service
 * @name nefis.core.Resource
 * @module nefis.core
 * @requires ngResource:$resource
 * @description
 *
 * A layer before we reach ngResource to make some general configuration
 *
 **/
function Resource($resource, environmentConfig) {
    return function(url, paramDefaults, actions, options) {
        options = options || {};

        var baseUrl = environmentConfig.apiV1.url + '/';

        // Configure the actions
        actions = actions || {};
        actions.get = actions.get || {};
        actions.save = actions.save || {};
        actions.query = actions.query || {};
        actions.remove = actions.remove || {};
        actions.delete = actions.delete || {};
        actions.update = actions.update || {};

        actions.query.method = 'GET';

        actions.delete.method = 'DELETE';
        actions.remove.method = 'DELETE';

        actions.update.method = 'PUT';
        actions.update.params = {
            id: '@id'
        };

        if (options.cache) {
            /*var cacheFactory;
            if(options.cache.get) {
                // Resource have its own CacheFactory
                cacheFactory = options.cache;
            } else {
                // Resource wants to be cached, but doesn't know where to put
                // it. So store the cache in defaultCache.
                cacheFactory = CacheFactory.get('defaultCache') || CacheFactory('defaultCache', {
                    maxAge: 60*60*1000 // 1 hour
                });
            }

            // Only GET actions can have cache.
            actions.get.cache = cacheFactory;
            actions.query.cache = cacheFactory;*/
        }

        for (var i in actions) {
            if (actions[i].url) actions[i].url = baseUrl + actions[i].url;
        }


        // Return resource
        return $resource(
            baseUrl + url,
            paramDefaults || null,
            actions || null,
            options || null
        );
    };
}

Resource.$inject = [
    '$resource',
    'environmentConfig',
];

angular.module('boykotvar.web.core').factory('Resource', Resource);
