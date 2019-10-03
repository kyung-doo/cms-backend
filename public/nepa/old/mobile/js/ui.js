// JavaScript Document
$(document).ready(function(){
    leftNav();
    $("#header .menu").on("click", function ( e )
    {
        if(!$(this).is(".active"))
        {
            showGnb();
        }
        else
        {
            hideGnb();
        }
    });

    $(window).on("scroll", function ( e )
    {
        var top = $(window).scrollTop();
        if(top > 300) $('.btn_top').show();
        else          $('.btn_top').hide();
    });

    $(window).trigger("scroll");

    $('.btn_top').on('click',function()
    {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });
    $('.filterList dl dt').on('click',function(){
        $(this).next().slideToggle(200);
        $(this).toggleClass('active');
        $(this).parents().siblings('dl').removeClass('active').find('dd').slideUp(200);
        $(this).parents().siblings('dl').find('dt').removeClass('active');

    })
})


function leftNav() {
    $('#header .menu .btnMenu').on('click',function(){
        $('#menuArea').addClass('active')
    })
    $('#menuArea .btnCLose').on('click',function(){
        $('#menuArea').removeClass('active')
    })

    $('.gnb>ul>li').each(function(){
        if($(this).find('ul').size()==1){
            $(this).addClass('hasSub')
        }
    })
    
    $('.gnb>ul>li>ul>li>a').on('click',function(){
        $(this).next().slideToggle(200).parent().toggleClass('active');
        $(this).parents().siblings('li').removeClass('active').find('.sub-ul').slideUp(200);
    })
}

function showGnb()
{
    $("#header .menu").addClass("active");
    TweenMax.to($("#header .menu").find("span").eq(0), 0.4, {y:4, height:2, rotation:-45, ease:Cubic.easeOut});
    TweenMax.to($("#header .menu").find("span").eq(1), 0.4, {height:2, rotation:45, ease:Cubic.easeOut});
    TweenMax.to($("#header .menu").find("span").eq(2), 0.4, {y:10, opacity:0, ease:Cubic.easeOut});
    $(".gnb-wrap").addClass('active');
//    TweenMax.set($(".gnb-wrap"), {x:648});
//    TweenMax.to($(".gnb-wrap"), 0.8, {x:0, ease:Cubic.easeInOut});
}

 function hideGnb()
{
    $("#header .menu").removeClass("active");
    TweenMax.to($("#header .menu").find("span").eq(0), 0.4, {y:0, height:2, rotation:0, ease:Cubic.easeOut});
    TweenMax.to($("#header .menu").find("span").eq(1), 0.4, {height:2, rotation:0, ease:Cubic.easeOut});
    TweenMax.to($("#header .menu").find("span").eq(2), 0.4, {y:0, opacity:1, ease:Cubic.easeOut});
//    TweenMax.to($(".gnb-wrap"), 0.8, {x:648, ease:Cubic.easeInOut, onComplete:function ()
//    {
    $(".gnb-wrap").removeClass('active');
//    }});
}


