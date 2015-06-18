/**
 * Created by wetcouch on 23.05.2015.
 */

angular.module('ideas.list', [])
    .controller('listController', ['$scope', function ($scope) {
        $scope.ideas = [
            {
                name: 'Example',
                id: 0
            },
            {
                name: 'Idea',
                id: 1
            }
        ];
    }]);