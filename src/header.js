function changeTheme(theme) {
    switch (theme) {
        case "regular":
            $('.ui.segment.darkorange').addClass("orange").removeClass("darkorange inverted");
            $('.ui.menu').removeClass("inverted");
            $(document.body).css("background-color", "white").css("color", "black");
            break;
        case "night":
            $('.ui.segment.orange').addClass("darkorange inverted").removeClass("orange");
            $('.ui.menu').addClass("inverted");
            $(document.body).css("background-color", "black").css("color", "white");
            break;
    }
    if ($.cookie("theme") === undefined) {
        $.cookie("theme", theme, {expires: 3650});
    }
}

$(document).ready(function() {
    $('.ui.dropdown').dropdown();
    $('.ui.dropdown .menu .item#regular').on('click', function() {
        changeTheme("regular");
    });
    $('.ui.dropdown .menu .item#night').on('click', function() {
        changeTheme("night");
    });
    var transitionTime = 0;
    $(document.body).fadeIn(transitionTime);
    changeTheme($.cookie("theme"));
});
