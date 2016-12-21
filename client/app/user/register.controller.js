function RegisterController($uibModalInstance, dgNotifications, User, Auth) {
    var vm = this;
    vm.data = {};
    vm.loading = [];

    vm.closeModal = function() {
        $uibModalInstance.dismiss();
    };

    vm.save = function() {
        vm.user = User.insert(vm.data).$promise.then(
            function success(response) {
                Auth.setToken(response.token);
                dgNotifications.success('Kayıt oldun!');
                vm.closeModal();
            },
            function error(response) {
                dgNotifications.error('Bir hata oldu');
            }
        );
        vm.loading.push(vm.user.$promise);
    };
}

RegisterController.$inject = [
    '$uibModalInstance',
    'dgNotifications',
    'User',
    'Auth',
];

angular.module('boykotvar.web.user')
    .controller('RegisterController', RegisterController);
