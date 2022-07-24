$(document).ready(function() {
    $('#hide').click(function () { $('#hidePara').hide() })
    $('#show').click(function () { $('#showImg').show() })
    $('#toggle').click(function () { $('#toggleImg').toggle() })
    $('#slideDown').click(function () { $('#slideDownImg').slideDown() })
    $('#slideUp').click(function () { $('#slideUpImg').slideUp() })
    $('#slideToggle').click(function () { $('#slideToggleImg').slideToggle() })
    $('#fadeIn').click(function () { $('#fadeInImg').fadeIn() })
    $('#fadeOut').click(function () { $('#fadeOutImg').fadeOut() })
    $('#fadeToggle').click(function () { $('#fadeToggleImg').fadeToggle() })
    $('#addClass').click(function () { $('#addClassDiv').addClass('bg-primary') })
    $('#before').click(function () { $('#beforeText').before('<p>You know what makes a good joke?</p>') })
    $('#after').click(function () { $('#afterText').after('<p>Let\'s split!</p>') })
    $('.appendLi').click(function () { $(this).append(' | YES!') })
    $('.htmlBobby, .htmlWewd, .htmlMakeStuff').click(function () {
        revealHtml($(this).attr("class"));
    })
    $('#attrDemoCheck').click(function () {
        $('#attrSpan').html($(this).attr("name"));
        console.log($(this).attr("name"));
    })
    $('#revealVal').click(function () {
        $('#revValP').html($('input[type="text"]').val())
    })
    $('#revealText').click(function () {
        $('#revealTextP').text("Thank you for checking out my demo page! Goodbye!")
    })

    function revealHtml(span) {
        let response = {
            'htmlBobby': 'Bobby Duke Arts',
            'htmlWewd': 'wewd',
            'htmlMakeStuff': 'making stuff'
        }
        
        $('.' + span).html(response[span]);
    }
})