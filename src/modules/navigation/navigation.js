/**
 * Created by wetcouch on 19.05.2015.
 */
angular.module('ideas.navigation', [])
    .controller('navController', ['$scope', function($scope) {
        $scope.cats = [
            {
                name: 'Everything',
                id: 0
            },
            {
                name: 'Big projects',
                id: 1
            },
            {
                name: 'Small ideas',
                id: 2
            },
            {
                name: 'Updates',
                id: 3
            },
            {
                name: 'Inbox',
                id: 4
            }
        ];

        $scope.selectedIndex = 0;

        $scope.itemClicked = function ($index) {
            $scope.selectedIndex = $index;
        };

        $scope.isUnactive = true;
    }]);
