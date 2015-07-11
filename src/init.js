angular.module('ideas', ['ideas.clock', 'ideas.navigation', 'ideas.list', 'ideas.project', 'ideas.content', 'ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .accentPalette('light-blue');
});
