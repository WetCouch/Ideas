/**
 * Created by wetcouch on 19.05.2015.
 */
$(document).ready(function () {
    function clock () {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }
        var minutes = currentTime.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        $('.clock').text(hours + ":" + minutes);
        var timeout = setTimeout(function() {clock()}, 500);
    }
    clock();
});