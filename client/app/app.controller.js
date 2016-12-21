function AppController($rootScope, dgPopup, Auth, User) {
    var vm = this;
    vm.currentUser = undefined;

    vm.openRegisterModal = function() {
        dgPopup.openModal({
            templateUrl: 'user/register-form.html',
            controller: 'RegisterController as registerModal',
        });
    };

    vm.loadCurrentUser = function(newToken, oldToken) {
        if (angular.isUndefined(newToken)) {
            vm.currentUser = undefined;
        } else {
            vm.currentUser = User.current();
        }
    };

    var authWatch = $rootScope.$watch(function() {
        return Auth.token;
    }, vm.loadCurrentUser);
}

AppController.$inject = [
    '$rootScope',
    'dgPopup',
    'Auth',
    'User',
];

angular.module('boykotvar.web').controller('AppController', AppController);
