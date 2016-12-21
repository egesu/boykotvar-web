function UibDatepickerPopupConfig(uibDatepickerPopupConfig) {
    uibDatepickerPopupConfig.closeText = 'Kapat';
    uibDatepickerPopupConfig.clearText = 'Temizle';
    uibDatepickerPopupConfig.currentText = 'Bugün';
    uibDatepickerPopupConfig.appendToBody = false;
    uibDatepickerPopupConfig.datepickerPopup = 'dd MMMM yyyy';
}

function UibDatepickerConfig(uibDatepickerConfig) {
    uibDatepickerConfig.startingDay = 1;
}

UibDatepickerPopupConfig.$inject = ['uibDatepickerPopupConfig'];
UibDatepickerConfig.$inject = ['uibDatepickerConfig'];

angular.module('boykotvar.web')
    .config(UibDatepickerPopupConfig)
    .config(UibDatepickerConfig);
