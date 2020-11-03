// $(function(){
//   $(document).scroll(function(){
//       var s = $(window).scrollTop();  
//       console.log(s);

//       if (s >= 2800) {
//         $('#menu > .menu_nav').addClass('show');
//         $('#menu > .menu_nav').removeClass('hide');
//       } else {
//         $('#menu > .menu_nav').removeClass('show');
//         $('#menu > .menu_nav').addClass('hide');

//       }
//   })
// })
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

$(function(){
  $(document).scroll(function(){
      var s = $(window).scrollTop();  
      console.log(s);

      if (s >= 2950) {
        $('#menu > .menu_nav').addClass('show');
        $('#menu > .menu_nav').removeClass('hide');
      } else {
        $('#menu > .menu_nav').removeClass('show');
        $('#menu > .menu_nav').addClass('hide');

      }
  })
  var header = $("#main_header").offset().top;
$(window).scroll(function() {
  	var window = $(this).scrollTop();

    if(100 <= window) {
      $("#main_header").addClass("fixed");
    } else {
      $("#main_header").removeClass("fixed");
    }
})
});
//   var header = $("#sub2_2_lnb").offset().top;
// $(window).scroll(function() {
//   	var window = $(this).scrollTop();

//     if(520 <= window) {
//       $("#sub2_2_lnb").addClass("fixed");
//     } else {
//       $("#sub2_2_lnb").removeClass("fixed");
//     }
// })
// });
   