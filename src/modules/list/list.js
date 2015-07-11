/**
 * Created by wetcouch on 23.05.2015.
 */

angular.module('ideas.list', ['ideas.project', 'ngMaterial'])
    .controller('listController', ['$scope', 'project', '$mdDialog', function ($scope, project, $mdDialog) {
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
            project.toggleDone(task);
        };

        $scope.editTaskTitle = function (task) {
          project.editTaskTitle(task);
        };

        $scope.editCategory = function () {
          project.editCategory();
        };

        $scope.removeCategory = function (ev) {
          var confirm = $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Are you sure you want to remove this category?')
            .content('It will cause all of the items in this category to be deleted as well.')
            .ariaLabel('Remove Category')
            .ok('Confirm')
            .cancel('Cancel')
            .targetEvent(ev);
          $mdDialog.show(confirm).then(function() {
            project.removeCategory();
            project.editCategory();
          }, function() {
            project.editCategory();
          });
        };
    }]);
