function LoginController(dgNotifications, User, Auth) {
    var vm = this;
    vm.loading = [];

    vm.login = function() {
        var user = User.login(vm.data);
        vm.loading.push(user.$promise);
        user.$promise.then(
            function success(response) {
                Auth.setToken(response.token);
                dgNotifications.success('Giriş yaptın');
            },
            function error() {
                dgNotifications.error('Giriş yapılamadı, bilgilerinizi kontrol edin');
            }
        );
    };

    vm.logout = function() {
        var user = User.logout();
        vm.loading.push(user.$promise);
        user.$promise.then(
            function success(response) {
                Auth.destroy();
                dgNotifications.success('Çıkış yaptın');
            },
            function error() {
                dgNotifications.error('Çıkış yapılamadı.');
            }
        );
    };
}

LoginController.$inject = [
    'dgNotifications',
    'User',
    'Auth',
];

angular.module('boykotvar.web.user')
    .controller('LoginController', LoginController);
