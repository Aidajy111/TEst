
$(function(){
    const dutton = $('#signUp')
    dutton.on('click', function(e){
        e.preventDefault()
        $('#popUP').addClass('active')
    });
});
$(function(){
    const clouse = $('#pop_up_clouse')
    clouse.on('click', function(e){
        e.preventDefault()
        $('#popUP').removeClass('active')
    });
});




let offset = 0;
const sliderLine = document.querySelector('.slider-line');
document.querySelector('.next').addEventListener('click', () => {
        offset = offset + 355;
        if(offset > 1420){
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });
    document.querySelector('.back').addEventListener('click', () => {
        offset = offset - 355;
        if(offset < 0){
            offset = 1420;
        }
        sliderLine.style.left = -offset + 'px';
    });
    let offset1 = 0;
const sliderLine2 = document.querySelector('.slider-line2');

document.querySelector('.next2').addEventListener('click', () => {
        offset1 = offset1 + 355;
        if(offset1 > 1420){
            offset1 = 0;
        }
        sliderLine2.style.left = -offset1 + 'px';
    });
    document.querySelector('.back2').addEventListener('click', () => {
        offset1 = offset1 - 355;
        if(offset1 < 0){
            offset1 = 1420;
        }
        sliderLine2.style.left = -offset1 + 'px';
    });
// $(function(){
//     const button2 = $('#btn-num')
//     button2.on('click', function(e){
//         e.preventDefault()
//         $('#adults__slides').addClass('active2')
//         button2.addClass('delete')
//     });
// })

function accordion(parent){
    if($('.'+parent+' .adults__slides').css('display')=='block') {
        $('.'+parent+' .btn-num').removeClass('opened');
        $('.'+parent+' .adults__slides').css('display', 'none');
    }
    else {
        $('.'+parent+' .adults__slides').css('display', 'block');
        $('.'+parent+' .btn-num').addClass('opened');
    }
}

$('.adults .btn-num').on('click', function(){accordion('adults')});
$('.children .btn-num').on('click', function(){accordion('children')});

$(function(){
    const button2 = $('#btn-num1')
    button2.on('click', function(e){
        e.preventDefault()
        $('#adults__slides1').addClass('active2')
    });
})
