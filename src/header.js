function changeTheme(theme) {
    if (theme === undefined) {
        theme = "regular";
    }
    switch (theme) {
        case "regular":
            $('.ui.darkorange:not(.ui.label)').addClass("orange").removeClass("darkorange inverted");
            $('.ui.menu').removeClass("inverted");
            $(".back-layer")[0].style.setProperty("background", "white", "important");
            $(".back-layer")[0].style.setProperty("color", "black");
            break;
        case "night":
            $('.ui.orange:not(.ui.label)').addClass("darkorange inverted").removeClass("orange");
            $('.ui.menu').addClass("inverted");
            $(".back-layer")[0].style.setProperty("background", "black", "important");
            $(".back-layer")[0].style.setProperty("color", "white");
            break;
    }
    $.cookie("theme", theme, {expires: 3650});
}

$(document).ready(function() {
    $('.ui.dropdown').dropdown();
    $('.menu .item#regular').on('click', function() {
        changeTheme("regular");
    });
    $('.menu .item#night').on('click', function() {
        changeTheme("night");
    });
    $('.menu.launch.icon.item').on('click', function(){
        $('.ui.left.sidebar').sidebar('toggle');
    });
    $('.options.launch.icon.item').on('click', function(){
        $('.ui.right.sidebar').sidebar('toggle');
    });
    var transitionTime = 0;
    $(document.body).fadeIn(transitionTime);
    changeTheme($.cookie("theme"));
});
