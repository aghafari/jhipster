(function() {
    'use strict';

    angular
        .module('jhipApp')
        .controller('TeacherDialogController', TeacherDialogController);

    TeacherDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Teacher', 'Course', 'School'];

    function TeacherDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Teacher, Course, School) {
        var vm = this;

        vm.teacher = entity;
        vm.clear = clear;
        vm.save = save;
        vm.courses = Course.query();
        vm.schools = School.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.teacher.id !== null) {
                Teacher.update(vm.teacher, onSaveSuccess, onSaveError);
            } else {
                Teacher.save(vm.teacher, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('jhipApp:teacherUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
