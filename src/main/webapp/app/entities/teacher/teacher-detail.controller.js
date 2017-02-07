(function() {
    'use strict';

    angular
        .module('jhipApp')
        .controller('TeacherDetailController', TeacherDetailController);

    TeacherDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Teacher', 'Course', 'School'];

    function TeacherDetailController($scope, $rootScope, $stateParams, previousState, entity, Teacher, Course, School) {
        var vm = this;

        vm.teacher = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipApp:teacherUpdate', function(event, result) {
            vm.teacher = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
