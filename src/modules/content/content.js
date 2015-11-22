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
        $scope.saveContent = function() {
          project.saveContent();
        };
        $scope.toggleBold = function () {
            document.execCommand('bold');
        };
        $scope.toggleItalic = function () {
            document.execCommand('italic');
        };
        $scope.toggleUnderline = function () {
            document.execCommand('underline');
        };
        $scope.addH1 = function () {
            document.execCommand('formatBlock', false, '<h3>');
        };
        $scope.addH2 = function () {
            document.execCommand('formatBlock', false, '<h4>');
        };
        $scope.addH3 = function () {
            document.execCommand('formatBlock', false, '<h5>');
        };
        $scope.makeDefault = function () {
            document.execCommand('formatBlock', false, '<p>');
        };
        $scope.addUl = function () {
            document.execCommand('insertUnorderedList');
        };
        $scope.addOl = function () {
            document.execCommand('insertOrderedList');
        };
    }]);
