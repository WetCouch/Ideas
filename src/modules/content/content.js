/**
 * Created by wetcouch on 26.04.2015.
 */
angular.module('ideas.content', ['ideas.project'])
    .controller('contentController', ['$scope', 'project', function ($scope, project) {
        $scope.task = null;

        $scope.$watch(function() {
            return project.getSelectedTask();
        }, function(task) {
            $scope.task = task;
        });

        $scope.editContent = function() {
          project.editContent();
        };

    }]);
