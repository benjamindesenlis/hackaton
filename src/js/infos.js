$(() => {

$('.projet').mouseenter(function() {
    $(this).children('.projet-infos').slideDown();
})

$('.projet').mouseout(function() {
    $(".projet-infos").slideUp();
})


})