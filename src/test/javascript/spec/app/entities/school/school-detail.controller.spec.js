'use strict';

describe('Controller Tests', function() {

    describe('School Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockSchool, MockCourse, MockTeacher;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockSchool = jasmine.createSpy('MockSchool');
            MockCourse = jasmine.createSpy('MockCourse');
            MockTeacher = jasmine.createSpy('MockTeacher');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'School': MockSchool,
                'Course': MockCourse,
                'Teacher': MockTeacher
            };
            createController = function() {
                $injector.get('$controller')("SchoolDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'jhipApp:schoolUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
