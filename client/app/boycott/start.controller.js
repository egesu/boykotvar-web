function BoycottStartController(dgNotifications, moment, Boycott, Media) {
    var vm = this;
    vm.data = {
        startsOn: moment().format('YYYY-MM-DD'),
        relatedLinks: [undefined],
        media_ids: [],
    };
    vm.files = {
        valid: [],
        invalid: [],
    };
    vm.loading = [];

    vm.init = function() {
        //
    };

    vm.save = function() {
        var boycott = Boycott.insert(vm.data);

        boycott.$promise.then(
            function success(response) {
                dgNotifications.success('Yeni boykot oluşturdun!');
            },
            function error(response) {
                dgNotifications.error('Boykot oluşturulamadı.');
            }
        );

        vm.loading.push(boycott.$promise);
    };

    vm.uploadFiles = function(valid, invalid) {
        vm.files.invalid = invalid;

        var i, index;

        for (i in valid) {
            index = vm.files.valid.push(valid[i]) - 1;
            vm.files.valid[index].promise = Media.upload({
                related_to: 'boycott_cover_image',
                image: valid[i],
            });
            vm.files.valid[index].listeningPromise = false;
        }

        vm.files.valid.forEach(function(file, index) {
            if (file.listeningPromise) {
                return;
            }

            file.promise.then(
                function success(response) {
                    file.result = response.data;
                    file.mediaId = response.data.id;
                    vm.data.media_ids.push(file.mediaId);
                },
                function error(data) {
                    dgNotifications.error('Bir dosya yüklenemedi');
                },
                function notify(event) {
                    file.progress = Math.min(100, parseInt(100.0 * event.loaded / event.total));
                }
            );
        });
    };

    vm.init();
}

BoycottStartController.$inject = [
    'dgNotifications',
    'moment',
    'Boycott',
    'Media',
];

angular.module('boykotvar.web.boycott')
    .controller('BoycottStartController', BoycottStartController);
