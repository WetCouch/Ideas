/**
 * Created by wetcouch on 23.05.2015.
 */

angular.module('ideas.list', ['ideas.project'])
    .controller('listController', ['$scope', 'project', function ($scope, project) {
        $scope.category = null;
        $scope.filters = project.getFilters();

        $scope.$watch(function() {
            return project.getSelectedCategory();
        }, function(category) {
            if(category) {
                $scope.category = category;
            }
        });

        $scope.selectedIndex = null;
        $scope.taskClicked = function ($index) {
            $scope.selectedIndex = $index;
            var task = $scope.category.tasks[$index];
            project.setSelectedTask(task);
        };

        $scope.removeTask = function ($index) {
            project.removeTaskByIndex($index);
        };

        $scope.toggleDone = function (task) {
            task.isDone = !task.isDone;
            localStorage.setItem('model', JSON.stringify(model));
        };

        $scope.editTaskTitle = function (task) {
          project.editTaskTitle(task);
        };

        $scope.editCategory = function () {
          project.editCategory();
        };
    }]);
