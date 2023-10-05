$(document).ready(function(){
  $('label.fas').click(function(){
    if($('label.fas').hasClass('fa-bars')){
      $('label.fas').removeClass('fa-bars').addClass('fa-times');
    } else {
      $('label.fas').removeClass('fa-times').addClass('fa-bars');
    }
  })
  // gnb 클릭 이벤트
  $('.gnb > ul > li').click(function(){
    var width = $(window).width();
    console.log(width);
    if(width <767){
      $(this).find('.sub').slideToggle(300);
    }
  });
});