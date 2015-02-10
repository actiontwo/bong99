$(document).ready(function () {
  var i=0;
  $('.casino-bxslider').bxSlider({
    auto: false,
    captions: true,
    onSliderLoad: function(){
      i++;
    }
  });
  if(i==4)
    $("#tabs").tabs();
  $(".size").kendoDropDownList();
});