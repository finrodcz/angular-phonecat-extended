'use strict';

angular
    .module('phoneList')
    .controller('PhoneListController', PhoneListController);

    PhoneListController.$inject = ['Phone'];

    function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
    }

