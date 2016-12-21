function HomeController(dgNotifications, Boycott) {
    var vm = this;
    vm.activeSlide = 0;

    vm.init = function() {
        vm.loadSliderBoycotts();
    };

    vm.loadSliderBoycotts = function() {
        vm.boycottsSlider = Boycott.query();
        vm.boycottsSlider.$promise.then(
            function success(data) {},
            function error(data) {
                dgNotifications.error('Boykotlar getirilemedi');
            }
        );
    };

    vm.init();
}

HomeController.$inject = [
    'dgNotifications',
    'Boycott',
];

angular.module('boykotvar.web.home').controller('HomeController', HomeController);
