$(document).ready(function() {
    $('img').click(function() {
        let imgObj = ninjaOrCat(this)

        $(this).attr('src', imgObj.generateUrl).attr('data-creature', imgObj.creature)
    })

    function ninjaOrCat(img) {
        let imgObj = {
            'index': $(img).attr('data-index'),
            'creature': '',
            'generateUrl': function() {
                return 'images/' + imgObj.creature + imgObj.index + '.png'
            }
        }

        if ($(img).attr('data-creature') === 'cat') {
            imgObj.creature = 'ninja'
        } else {
            imgObj.creature = 'cat'
        }

        return imgObj
    }
})