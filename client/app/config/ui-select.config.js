function DugunFormsUISelectConfig(uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
}

DugunFormsUISelectConfig.$inject = [
    'uiSelectConfig',
];

angular.module('boykotvar.web').config(DugunFormsUISelectConfig);
