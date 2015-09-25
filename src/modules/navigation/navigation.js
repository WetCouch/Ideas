/**
 * Created by wetcouch on 19.05.2015.
 */
angular.module('ideas.navigation', ['ideas.project', 'ngMaterial'])
    .controller('navController', ['$scope', 'project', '$mdSidenav', function ($scope, project, $mdSidenav) {
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

        if (project.showNav) {
          $mdSidenav('nav').open();
        } else {
          $mdSidenav('nav').close();
        }

        $scope.itemClicked(0);
    }]);
