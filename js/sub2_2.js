$(function () {
  $('.depth1 > li').hover(
    function () {
      $('.bg').stop().slideDown(200);
      $('.depth2').stop().slideDown(200);
    },
    function () {
      $('.bg').stop().slideUp(200);
      $('.depth2').stop().slideUp(200);
    }
  );
});

$(function () {
  $('#sub2_2_lnb > ul > li').click(function () {
    $(this).addClass('active');
    $('#sub2_2_lnb > ul > li').not(this).removeClass('active');
  })
});

$().ready(function(){
  var menu1 = $('#sub2_2_lnb > ul > li').eq(0);
  var menu1_1 = $('#gnb .depth1 li .sub2 li').eq(0);
  var menu2 = $('#sub2_2_lnb > ul > li').eq(1);
  var menu2_1 = $('#gnb .depth1 li .sub2 li').eq(1);
  var menu3 = $('#sub2_2_lnb > ul > li').eq(2);
  var menu3_1 = $('#gnb .depth1 li .sub2 li').eq(2);
  var menu4 = $('#sub2_2_lnb > ul > li').eq(3);
  var menu4_1 = $('#gnb .depth1 li .sub2 li').eq(3);
  var menu5 = $('#sub2_2_lnb > ul > li').eq(4);
  var menu5_1 = $('#gnb .depth1 li .sub2 li').eq(4);
  var menu6 = $('#sub2_2_lnb > ul > li').eq(5);
  var menu6_1 = $('#gnb .depth1 li .sub2 li').eq(5);

  $(menu1).click(function(){
    $(menu1).addClass('active')
    $('#sub2_2_lnb > ul > li').not(menu1).removeClass('active')
    $('#allMenu1').addClass('show');
    $('[id^="allMenu"]').not('#allMenu1').removeClass('show');
    $('#allMenu1').removeClass('hide');
    $('[id^="allMenu"]').not('#allMenu1').addClass('hide');
    $('#title_img > .banner_bg > h2').text('커피')
    $('.location span').eq(2).text('커피')
    return false;
  })
  $(menu1_1).click(function(){
    $(menu1).addClass('active')
    $('#sub2_2_lnb > ul > li').not(menu1).removeClass('active')
    $('#allMenu1').addClass('show');
    $('[id^="allMenu"]').not('#allMenu1').removeClass('show');
    $('#allMenu1').removeClass('hide');
    $('[id^="allMenu"]').not('#allMenu1').addClass('hide');
    $('#title_img > .banner_bg > h2').text('커피')
    $('.location span').eq(2).text('커피')

    return false;
  })
  $(menu2).click(function(){
    $(menu2).addClass('active')
    $('#sub2_2_lnb > ul > li').not(menu2).removeClass('active')
    $('#allMenu2').addClass('show');
    $('[id^="allMenu"]').not('#allMenu2').removeClass('show');
    $('#allMenu2').removeClass('hide');
    $('[id^="allMenu"]').not('#allMenu2').addClass('hide');
    $('#title_img > .banner_bg > h2').text('소프트 드링크')
    $('.location span').eq(2).text('소프트 드링크')
    return false;
  })
  $(menu2_1).click(function(){
    $(menu2).addClass('active')
    $('#sub2_2_lnb > ul > li').not(menu2).removeClass('active')
    $('#allMenu2').addClass('show');
    $('[id^="allMenu"]').not('#allMenu2').removeClass('show');
    $('#allMenu2').removeClass('hide');
    $('[id^="allMenu"]').not('#allMenu2').addClass('hide');
    $('#title_img > .banner_bg > h2').text('소프트 드링크')
    $('.location span').eq(2).text('소프트 드링크')
    return false;
  })
  $(menu3).click(function(){
    $(menu3).addClass('active')
    $('#sub2_2_lnb > ul > li').not(menu3).removeClass('active')
    $('#allMenu3').addClass('show');
    $('[id^="allMenu"]').not('#allMenu3').removeClass('show');
    $('#allMenu3').removeClass('hide');
    $('[id^="allMenu"]').not('#allMenu3').addClass('hide');
    $('#title_img > .banner_bg > h2').text('티')
    $('.location span').eq(2).text('티')
    return false;
  })
  $(menu3_1).click(function(){
    $(menu3).addClass('active')
    $('#sub2_2_lnb > ul > li').not(menu3).removeClass('active')
    $('#allMenu3').addClass('show');
    $('[id^="allMenu"]').not('#allMenu3').removeClass('show');
    $('#allMenu3').removeClass('hide');
    $('[id^="allMenu"]').not('#allMenu3').addClass('hide');
    $('#title_img > .banner_bg > h2').text('티')
    $('.location span').eq(2).text('티')
    return false;
  })
  $(menu4).click(function(){
    $(menu4).addClass('active')
    $('#sub2_2_lnb > ul > li').not(menu4).removeClass('active')
    $('#allMenu4').addClass('show');
    $('[id^="allMenu"]').not('#allMenu4').removeClass('show');
    $('#allMenu4').removeClass('hide');
    $('[id^="allMenu"]').not('#allMenu4').addClass('hide');
    $('#title_img > .banner_bg > h2').text('디저트')
    $('.location span').eq(2).text('디저트')
    return false;
  })
  $(menu4_1).click(function(){
    $(menu4).addClass('active')
    $('#sub2_2_lnb > ul > li').not(menu4).removeClass('active')
    $('#allMenu4').addClass('show');
    $('[id^="allMenu"]').not('#allMenu4').removeClass('show');
    $('#allMenu4').removeClass('hide');
    $('[id^="allMenu"]').not('#allMenu4').addClass('hide');
    $('#title_img > .banner_bg > h2').text('디저트')
    $('.location span').eq(2).text('디저트')
    return false;
  })
  $(menu5).click(function(){
    $(menu5).addClass('active')
    $('#sub2_2_lnb > ul > li').not(menu5).removeClass('active')
    $('#allMenu5').addClass('show');
    $('[id^="allMenu"]').not('#allMenu5').removeClass('show');
    $('#allMenu5').removeClass('hide');
    $('[id^="allMenu"]').not('#allMenu5').addClass('hide');
    $('#title_img > .banner_bg > h2').text('베이커리')
    $('.location span').eq(2).text('베이커리')
    return false;
  })
  $(menu5_1).click(function(){
    $(menu5).addClass('active')
    $('#sub2_2_lnb > ul > li').not(menu5).removeClass('active')
    $('#allMenu5').addClass('show');
    $('[id^="allMenu"]').not('#allMenu5').removeClass('show');
    $('#allMenu5').removeClass('hide');
    $('[id^="allMenu"]').not('#allMenu5').addClass('hide');
    $('#title_img > .banner_bg > h2').text('베이커리')
    $('.location span').eq(2).text('베이커리')
    return false;
  })
  $(menu6).click(function(){
    $(menu6).addClass('active')
    $('#sub2_2_lnb > ul > li').not(menu6).removeClass('active')
    $('#allMenu6').addClass('show');
    $('[id^="allMenu"]').not('#allMenu6').removeClass('show');
    $('#allMenu6').removeClass('hide');
    $('[id^="allMenu"]').not('#allMenu6').addClass('hide');
    $('#title_img > .banner_bg > h2').text('MD')
    $('.location span').eq(2).text('MD')
    return false;
  })
  $(menu6_1).click(function(){
    $(menu6).addClass('active')
    $('#sub2_2_lnb > ul > li').not(menu6).removeClass('active')
    $('#allMenu6').addClass('show');
    $('[id^="allMenu"]').not('#allMenu6').removeClass('show');
    $('#allMenu6').removeClass('hide');
    $('[id^="allMenu"]').not('#allMenu6').addClass('hide');
    $('#title_img > .banner_bg > h2').text('MD')
    $('.location span').eq(2).text('MD')
    return false;
  })
})

$(function () {
  $(document).scroll(function () {
    var s = $(window).scrollTop();
    console.log(s);

    if (s >= 2950) {
      $('#menu1 > .menu_nav').addClass('show');
      $('#menu1 > .menu_nav').removeClass('hide');
    } else {
      $('#menu1 > .menu_nav').removeClass('show');
      $('#menu1 > .menu_nav').addClass('hide');
    };
    if (s >= 1450) {
      $('#menu2 > .menu_nav').addClass('show');
      $('#menu2 > .menu_nav').removeClass('hide');
    } else {
      $('#menu2 > .menu_nav').removeClass('show');
      $('#menu2 > .menu_nav').addClass('hide');
    };
    if (s >= 1100) {
      $('#menu3 > .menu_nav').addClass('show');
      $('#menu3 > .menu_nav').removeClass('hide');
    } else {
      $('#menu3 > .menu_nav').removeClass('show');
      $('#menu3 > .menu_nav').addClass('hide');
    };
    if (s >= 870) {
      $('#menu4 > .menu_nav').addClass('show');
      $('#menu4 > .menu_nav').removeClass('hide');
    } else {
      $('#menu4 > .menu_nav').removeClass('show');
      $('#menu4 > .menu_nav').addClass('hide');
    };
    if (s >= 1050) {
      $('#menu5 > .menu_nav').addClass('show');
      $('#menu5 > .menu_nav').removeClass('hide');
    } else {
      $('#menu5 > .menu_nav').removeClass('show');
      $('#menu5 > .menu_nav').addClass('hide');
    };
  })
  var header = $("#main_header").offset().top;
  $(window).scroll(function () {
    var window = $(this).scrollTop();

    if (100 <= window) {
      $("#main_header").addClass("fixed");
    } else {
      $("#main_header").removeClass("fixed");
    }
  })
});
