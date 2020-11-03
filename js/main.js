// 2단계 메뉴 (전체 슬라이드)
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
})

/** 
  ### slider 사용법 ###
  sliderStart() 슬라이더 재생
  sliderStop() 슬라이더 정지
**/
$(function () {
  var img_num = 0; // 이미지 번호
  var duration = 3000; // 인터벌 시간
  var slider;   // slider 실행 객체 변수

  // 초기화
  $('.sliders > img').fadeOut();
  $('.sliders > img').eq(img_num).fadeIn();

  // 
  function changeSlider() {
    // 전체 이미지 fadeOut
    $('.sliders > img').fadeOut();
    // 현재 이미지 fadeIn
    $('.sliders > img').eq(img_num).fadeIn();
    // pager UI 업데이트
    $('.pager > a').removeClass('active');
    $('.pager > a').eq(img_num).addClass('active');
  }

  // 슬라이더 재생
  function sliderStart() {
    slider = setInterval(function () {
      // 마지막 이미지 번호이면 처음으로 
      if (img_num >= 2) { img_num = 0 } else {
        // 다음 이미지 번호로
        img_num = img_num + 1;
      }
      changeSlider(img_num);
    }, duration);
  }

  // 슬라이더 정지
  function sliderStop() {
    clearInterval(slider);
    console.log('stop');
  }
  
  const wrapper = document.getElementById("instagram");
  fetch("https://www.instagram.com/coffee.myungga/")
  .then(a => {
      return a.text();
  }).then(a => {
      const media = JSON.parse(a.slice(a.indexOf("edge_owner_to_timeline_media") + 30, a.indexOf("edge_saved_media") - 2));
      media.edges.forEach(m => {
          const node = m.node,
              a = document.createElement("a"),
              img = document.createElement("img");
          
          a.target="_blank",
          a.href = `https://www.instagram.com/p/${node.shortcode}/`,
          img.src = node.display_url,
          a.append(img),
          wrapper.append(a)
      })
  })
  sliderStart();

  // 마우스가 올라가면 슬라이더 정지
  $('.sliders, .first, .second, .third').hover(
    function () {
      sliderStop();
    },
    function () {
      sliderStart();
      console.log('start');
    }
  )

  // 1번째 pager 클릭
  $('.pager > .first').click(function () {
    img_num=0;
    changeSlider();

  })
  // 2번째 페이저 클릭
  $('.pager > .second').click(function () {
    img_num=1;
    changeSlider();
  })

  // 3번째 페이저 클릭
  $('.pager > .third').click(function () {
    img_num=2;
    changeSlider();
  })

});
$(function(){
  $(document).scroll(function(){
      var s = $(window).scrollTop();  
      console.log(s);

      if (s >= 2500) {
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

 // $end
