$(document).ready(function () {
  $('#main-slider .slider').bxSlider();

  showMenuList();
  ramdomNews();

});

var showMenuList = function () {
  var mainMenu = $('.main-menu');
  var subMenu = $('.sub-menu');
  mainMenu.find('li').hover(function () {
    if ($(this).hasClass('active-menu')) {
      return;
    }
    mainMenu.find('li').removeClass('active-menu');
    subMenu.hide();
    var menuId = $(this).addClass('active-menu').data('menu');
    $('#' + menuId).css({display: 'table'})
  })
};

var ramdomNews = function () {
  var news = $('.news');
  news.each(function () {
    var figureNew = $(this).find('.figure-news');
    var numberPost = figureNew.length;
    var showNews = Math.floor(Math.random() * numberPost);
    $(this).find('.figure-news').hide();
    console.log (showNews);
    $(this).find('.figure-news:eq(' + showNews + ')').show();
  });
};