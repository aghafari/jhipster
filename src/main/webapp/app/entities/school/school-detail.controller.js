(function() {
    'use strict';

    angular
        .module('jhipApp')
        .controller('SchoolDetailController', SchoolDetailController);

    SchoolDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'School', 'Course', 'Teacher'];

    function SchoolDetailController($scope, $rootScope, $stateParams, previousState, entity, School, Course, Teacher) {
        var vm = this;

        vm.school = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipApp:schoolUpdate', function(event, result) {
            vm.school = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
