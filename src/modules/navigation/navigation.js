/**
 * Created by wetcouch on 19.05.2015.
 */
$('document').ready(function () {
    $(".nav-link").click(function () {
        $(".nav-link").removeClass('is-active');
        $("#" + this.id).addClass('is-active')
    })
});