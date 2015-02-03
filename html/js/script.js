$(document).ready(function () {
  $('#main-slider .slider').bxSlider();

  showMenuList();

});

var showMenuList = function () {
  var mainMenu = $('.main-menu');
  var subMenu = $('.sub-menu');
  mainMenu.find('li').hover(function(){
    if($(this).hasClass('active-menu')){
      return;
    }
    mainMenu.find('li').removeClass('active-menu');
    subMenu.hide();
    var menuId = $(this).addClass('active-menu').data('menu');
    $('#'+menuId).css({display:'table'})
  })
};