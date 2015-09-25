/**
 * Created by wetcouch on 19.05.2015.
 */
angular.module('ideas.navigation', ['ideas.project'])
    .controller('navController', ['$scope', 'project', '$mdDialog', function ($scope, project, $mdDialog) {
        $scope.cats = project.getModel().categories;
        $scope.filters = project.getFilters();
        $scope.showNav = project.getShowNav();

        $scope.selectedIndex = null;

        $scope.itemClicked = function ($index) {
            $scope.selectedIndex = $index;
            var category = project.getCategoryByIndex($index);
            project.setSelectedCategory(category);
        };

        $scope.addCategory = function () {
            project.addCategory();
        };
        $scope.addTask = function () {
            project.addTask();
        };
        $scope.toggleShowDone = function () {
          project.toggleShowDone();
        };
        $scope.clearLocal = function (ev) {
          var confirm = $mdDialog.confirm()
            .parent(angular.element(document.body))
            .title('Are you sure you want to clear the local storage?')
            .content('It will cause all of the items to be deleted, and will revert all values to the default ones.')
            .ariaLabel('Clear LocalStorage')
            .ok('Confirm')
            .cancel('Cancel')
            .targetEvent(ev);
          $mdDialog.show(confirm).then(function() {
            project.clearLocal();
          });
        };

        $scope.itemClicked(0);
    }]);
