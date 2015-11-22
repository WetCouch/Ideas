angular.module('ideas', ['ideas.clock', 'ideas.navigation', 'ideas.list', 'ideas.project', 'ideas.content', 'ngMaterial', 'ideas.contenteditable'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .accentPalette('light-blue');
});
