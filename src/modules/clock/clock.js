/**
 * Created by wetcouch on 19.05.2015.
 */
function Clock (selector) {
    var displayedMin = null;

    function updateClock() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }
        var minutes = currentTime.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if(minutes == displayedMin) {
            return;
        }

        displayedMin = minutes;

        $(selector).text(hours + ":" + minutes);
    }

    this.interval = setInterval(updateClock, 1000);
}

Clock.prototype.destroy = function() {
    clearInterval(this.interval);
};

angular.module('ideas.clock', []).directive('clock', function() {
    return {
        replace: true,
        template: '<div></div>',
        link: function(scope, element) {
            var clock = new Clock(element);

            scope.$on('$destroy', function() {
                clock.destroy();
            });

        }
    };
});