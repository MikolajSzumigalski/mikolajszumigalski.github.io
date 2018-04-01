$(document).ready(function(){
    $('#guzik1').click(function(){
        $('#tekst1').hide(1000);
    }
    )
})

$(document).ready(function(){
    $('#guzik2').click(function(){
        $('#tekst1').show(1000);
    }
    )
})

$(document).ready(function(){
    $('#guzik3').click(function(){
        $('#tekst1').toggle(1000);
    }
    )
})

$(document).ready(function(){
    $('#fadetoggle').click(function(){
        $('#tekst0').fadeToggle(1000);
    }
    )
})

$(document).ready(function(){
    $('#slide').click(function(){
        $('#tekst3').slideToggle(500);
    }
    )
})