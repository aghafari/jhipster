(function() {
    'use strict';

    angular
        .module('jhipApp')
        .controller('SchoolDialogController', SchoolDialogController);

    SchoolDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', '$q', 'entity', 'School', 'Course', 'Teacher'];

    function SchoolDialogController ($timeout, $scope, $stateParams, $uibModalInstance, $q, entity, School, Course, Teacher) {
        var vm = this;

        vm.school = entity;
        vm.clear = clear;
        vm.save = save;
        vm.courses = Course.query();
        vm.teachers = Teacher.query({filter: 'school-is-null'});
        $q.all([vm.school.$promise, vm.teachers.$promise]).then(function() {
            if (!vm.school.teacher || !vm.school.teacher.id) {
                return $q.reject();
            }
            return Teacher.get({id : vm.school.teacher.id}).$promise;
        }).then(function(teacher) {
            vm.teachers.push(teacher);
        });

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.school.id !== null) {
                School.update(vm.school, onSaveSuccess, onSaveError);
            } else {
                School.save(vm.school, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('jhipApp:schoolUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
