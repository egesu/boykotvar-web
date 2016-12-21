function Media(Upload, environmentConfig) {
    var service = {},
        self = this;

    self.url = environmentConfig.apiV1.url + '/media';

    service.upload = function(data) {
        var promise = Upload.upload({
            url: self.url,
            data: data,
        });

        return promise;
    };

    return service;
}

Media.$inject = [
    'Upload',
    'environmentConfig',
];

angular.module('boykotvar.media').factory('Media', Media);
