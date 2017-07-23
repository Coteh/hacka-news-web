$(document).ready(function() {
    $('.ui.dropdown').dropdown();
    $('.ui.dropdown .menu .item#regular').on('click', function() {
        $('.ui.segment.darkorange').addClass("orange").removeClass("darkorange inverted");
        $('.ui.menu').removeClass("inverted");
        $(document.body).css("background-color", "white").css("color", "black");
    });
    $('.ui.dropdown .menu .item#night').on('click', function() {
        $('.ui.segment.orange').addClass("darkorange inverted").removeClass("orange");
        $('.ui.menu').addClass("inverted");
        $(document.body).css("background-color", "black").css("color", "white");
    });
});
