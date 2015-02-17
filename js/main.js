(function (window, $) {
    'use strict';
    // Cache document for fast access.
    var document = window.document;
    function mainSlider() {
        $('.bxslider').bxSlider({
            pagerCustom: '#bx-pager',
            mode: 'fade',
            nextText: '',
            prevText: '',
            donateText:''
        });
    }
    mainSlider();
    var $links = $(".bx-wrapper .bx-controls-direction a, #bx-pager a");
    $links.click(function(){
        $(".slider-caption").removeClass('animated fadeInLeft');
        $(".slider-caption").addClass('animated fadeInLeft');
    });
    $(".bx-controls").addClass('container');
    $(".bx-next").addClass('fa fa-angle-right');
    $(".bx-prev").addClass('fa fa-angle-left');
    $(".bx-donate").addClass('donate');
    $('a.toggle-menu').click(function(){
        $('.responsive .main-menu').toggle();
        return false;
    });
    $('.responsive .main-menu a').click(function(){
        $('.responsive .main-menu').hide();

    });
    $('.main-menu').singlePageNav();
})(window, jQuery);

var map = '';

function initialize() {
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(16.8461789,96.1309764)
    };
    map = new google.maps.Map(document.getElementById('map'),  mapOptions);
}
    
function readMore(page,upperDiv)
{
    var upper = $( "#"+upperDiv);
    $('#moreInfo').remove();
    upper.after('<div id = "moreInfo" style="margin-left:58px;width:1160px;box-shadow:0 0 3px 3px green;padding-left:5px;"></div>')
    
    //Load HTML , Adjust height after load in callback
    $("#moreInfo").load(page+".html", function(){
        var totalHeight=0;
        $("#moreInfo > div").each(function(){
            totalHeight += $(this).outerHeight(true);
        });
        $('#moreInfo').height(totalHeight+30);
    });
    //Set cursur at top
    $('html, body').animate({
        scrollTop: $("#moreInfo").offset().top
    }, 2000);
}

function closeMore(upperDiv,moreInfoDiv)
{
    var moreInfo = moreInfoDiv || 'moreInfo';
    
    $('#'+moreInfo).remove();

    $('html, body').animate({
        scrollTop: $("#"+upperDiv).offset().top
    }, 2000);
}
function clickDonateBind(){
    $('.donate').colorbox({
        href:"donate.html",
        width:'1242px',
        height:'1400px',
        scrolling:false,
        close:'close',
        closeButton:true
    });
}
// gallery menu functions starts here
function expand($elem){
    var angle = 0;
    var t = setInterval(function () {
        if(angle == 1440){
            clearInterval(t);
            return;
        }
        angle += 40;
        $('.link',$elem).stop().animate({
            rotate: '+=-40deg'
        }, 0);
    },10);
    $elem.stop().animate({
        width:'268px'
    }, 1000)
    .find('.item_content').fadeIn(400,function(){
        $(this).find('p').stop(true,true).fadeIn(600);
    });
}
function collapse($elem){
    var angle = 1440;
    var t = setInterval(function () {
        if(angle == 0){
            clearInterval(t);
            return;
        }
        angle -= 40;
        $('.link',$elem).stop().animate({
            rotate: '+=40deg'
        }, 0);
    },10);
    $elem.stop().animate({
        width:'52px'
    }, 1000)
    .find('.item_content').stop(true,true).fadeOut().find('p').stop(true,true).fadeOut();
}
function show_album(ele)
{
    var eleId = $('h2', ele).attr('id');
    $("#gallery").load("gallery/album"+eleId+".html", function(){
        $("#makeMeScrollable").smoothDivScroll({
            mousewheelScrolling: "allDirections",
            manualContinuousScrolling: true
        });
        // Init colorbox
        $("#makeMeScrollable a").colorbox({
            speed: "500"
        });
    });
}
//gallery menu functions ends here