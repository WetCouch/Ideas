/**
 * Created by wetcouch on 23.05.2015.
 */
$('document').ready(function () {
    $('.list-title').click(function () {
        var parentId = $(this).parent().attr('id');
        $('.list-title').removeClass('is-selected');
        $('#' + parentId + ' .list-title').addClass('is-selected');
    });

    $('.list-icon-check').click(function () {
        var parentId = $(this).parent().attr('id');
        var selector = $('#' + parentId + ' .list-icon-check');
        if ($(selector).hasClass('is-unactive')) {
            $(selector).removeClass('is-unactive');
        } else {
            $(selector).addClass('is-unactive');
        }
    })
});