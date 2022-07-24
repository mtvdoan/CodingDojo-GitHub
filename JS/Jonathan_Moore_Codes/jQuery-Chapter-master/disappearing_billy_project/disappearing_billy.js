$(document).ready(function() {
    var billyImg = $('.billyImg');
    $(billyImg).click(function() { $(this).hide(1000) })
    $('#restore').click(function() { $(billyImg).show(1000) })
})