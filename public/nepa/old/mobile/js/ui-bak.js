// JavaScript Document
$(document).ready(function(){
    leftNav();
    setTypoMotion()
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

function setTypoMotion()
{
    var owner = this;
    var addDelay = 1;
    $(".main-tit .line").hide();
    $(".main-tit .txt > span").each(function ( i )
    {
        $(this).hide();
        if(i == 4) addDelay += 0.2;
        if(i == 8) addDelay += 0.2;
        TweenMax.set($(this), {delay:addDelay+(0.12 * i), display:"inline"});
    });
    TweenMax.set($(".main-tit .line"), {delay:1, display:"inline-block"});
    TweenMax.set($(".sub-tit"), {opacity:0, x:-50});
    TweenMax.to($(".sub-tit"), 0.8, {delay:3, opacity:1, x:0, ease:Cubic.easeOut});
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
var mySlider ;
$(document).ready(function(){
    mySlider = $('.productSlider .slider').bxSlider({
        auto: false,
        autoControls:false,
        pause:3000,
        adaptiveHeight:true,
        responsive:true,
        controls:true,
        pager:true,
        nextText:'',
        prevText:'',
        speed:500,
    });
    $(".productSlider .bx-wrapper").hide();
    $(".productSlider .bx-wrapper").eq(0).show();
    var sliderHeight = $('.productSlider').height();
//     mySlider.reloadSlider();
//    setTimeout(function() {
//      $('.productSlider').css({height:sliderHeight})
//    }, 2000);
    console.log(mySlider)
});

$(document).ready(function(){
    $('.btn_top').on('click',function(){
        $('html, body').animate({
                scrollTop: 0
            }, 400);
        })
    $('.detailVisual ul').bxSlider({
        auto: true,
        mode:'fade',
        autoControls:false,
        pause:3000,
        adaptiveHeight:true,
        responsive:true,
        controls:false,
        pager:false,
        nextText:'',
        prevText:'',
        speed:500,
    });
   
    $('.productSelect li a').on('click',function(e){
        e.preventDefault();
        var indexNum = $('.productSelect li a').index(this);
        $('.productSelect li').removeClass('active');
        $('.productSelect li').eq(indexNum).addClass('active')
//        $('.productSlider .bx-wrapper').hide()
//        $('.productSlider .bx-wrapper').eq(indexNum).show();
        $('html, body').animate({
            scrollTop: $(".productSlider").offset().top - 50
        }, 400);
//        mySlider.reloadSlider();
        return false;
    })
    

    $('.itemList ul').bxSlider({
        auto:false,
        autoControls:false,
        pause:3000,
        adaptiveHeight:true,
        responsive:true,
        controls:false,
        pager:false,
        nextText:'',
        prevText:'',
        speed:500,
        slideWidth:90,
        slideMargin:20,
        infiniteLoop:true,
        minSlides:4,
        maxSlides:8,
//        moveSlides:1,
        oneToOneTouch:false,
    });
    
    $('.filterList dl dt').on('click',function(){
        $(this).next().slideToggle(200);
        $(this).toggleClass('active');
        $(this).parents().siblings('dl').removeClass('active').find('dd').slideUp(200);
    })
    
});
