/**
 * Created by Daniel on 2017/07/06.
 */
$(document).ready(function(){
  var value = 'pictures';
  $(".filter").not('.'+value).hide('3000');
  $('.filter').filter('.'+value).show('3000');

  $(".filter-button").click(function(){
    value = $(this).attr('data-filter');
    $(".filter").not('.'+value).hide('3000');
    $('.filter').filter('.'+value).show('3000');
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

});