$(document).ready(function(){
    var $up = $('.up');
    $up.hide()
    $(window).scroll(function(){
        if($(document).scrollTop() > 400){
            $up.fadeIn(500);
        }
        else{
            $up.fadeOut(500)    
        }
    })
    $up.click(function(){
        $('html, body').animate({scrollTop:0}, 500);
    })
    $('.scroll').on('click', function(){
        var $top = $('.sec-1').offset().top;
        $('html, body').animate({
            scrollTop: $top,
        }, 200)
    })
    var $img = $('.carousel-inner img');
    var $cont = $('.container-hide');
    $cont.hide()
    $img.click(function(){
        $('body, html').css('overflow', 'hidden'); 
        $cont.fadeIn(200)
        var imgURL = $(this).attr('src');
        $('#mainImg').fadeIn(200, function(){
            $(this).attr('src', imgURL)
        })
    })
    $('.close').click(function(){
        $('body, html').css('overflow', 'auto'); 
        $cont.fadeOut(200)
    })
    $('.down').click(function(){
        var $sec2 = $('.sec-2').offset().top;
        $('html, body').animate({
            scrollTop: $sec2,
        },500)
    })
    $('.down-1').click(function(){
        var $sec3 = $('.sec-3').offset().top;
        $('html, body').animate({
            scrollTop: $sec3,
        },500)
    })
    $('.red').click(function(){
        var $secl = $('.lsec-1').offset().top;
        $('html, body').animate({
            scrollTop: $secl,
        },500)
    })
    $('.down-foot').click(function(){
        var $footer = $('.foot-1').offset().top;
        $('html, body').animate({
            scrollTop: $footer,
        },500)
    })
    $('.scroll-down').click(function(){
        var $sec11 = $('.prosec-1').offset().top;
        $('html, body').animate({
            scrollTop: $sec11,
        },300)
    })
    $('.down-pro').click(function(){
        var $footpro = $('.footer-pro').offset().top;
        $('html, body').animate({
            scrollTop: $footpro,
        },300)
    })
    $('.down-sec').click(function(){
        var $secsec = $('.psec-2').offset().top;
        $('html, body').animate({
            scrollTop: $secsec,
        },300)
    })
    $('.down-footer').click(function(){
        var $profooter = $('.pro-footer').offset().top;
        $('html, body').animate({
            scrollTop: $profooter,
        },500)
    })
    $('.down-blog').click(function(){
        var $downBlog = $('.blog-foot').offset().top;
        $('html, body').animate({
            scrollTop: $downBlog,
        },500)
    })
    var $blog = $('.scroll-color');
    $blog.click(function(){
        var $blogSec = $('.blog-sec-1').offset().top;
        $('html, body').animate({
            scrollTop: $blogSec,
        },300)
    })
})