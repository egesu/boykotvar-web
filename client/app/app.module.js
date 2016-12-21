angular.module('boykotvar.web', [
    // vendor
    'ngRoute', // angular routing
    'ngAnimate', // angular animations
    'ui.bootstrap', // twitter bootstrap fw w/angular
    'dugun.forms', // easy to build forms
    'dugun.popup', // to open modals
    'dugun.notifications', // toast notifications
    'angular-busy', // loading indicator
    'ngFileUpload', // for uploading files

    // app
    'boykotvar.web.core',
    'boykotvar.web.home',
    'boykotvar.web.boycott',
    'boykotvar.web.user',
    'boykotvar.media',
    'boykotvar.formElements',
    'boykotvar.concern',
]);
