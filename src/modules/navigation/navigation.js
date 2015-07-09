/**
 * Created by wetcouch on 19.05.2015.
 */
angular.module('ideas.navigation', ['ideas.project'])
    .controller('navController', ['$scope', 'project', function ($scope, project) {
        $scope.cats = project.getModel().categories;
        $scope.filters = project.getFilters();

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

        $scope.itemClicked(0);
    }]);
