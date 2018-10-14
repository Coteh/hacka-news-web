function getThemeColor(theme) {
    switch (theme) {
        case "regular":
            return "orange";
        case "night":
            return "darkorange";
        case "midnight":
            return "black";
        case "hacktoberfest":
            return "blue";
    }
}

function resetTheme() {
    // Remove "inverted" property from themeable elements if it exists
    $(".ui.menu").removeClass("inverted");
    // Set defaults for back-layer
    $(".back-layer")[0].style.setProperty("background", "white", "important");
    $(".back-layer")[0].style.setProperty("color", "black");
    // Reset themeable color
    $(".ui.themeable:not(.ui.label)").removeClass(getThemeColor($.cookie("theme")));
}

function changeTheme(theme) {
    if (theme === undefined) {
        theme = "regular";
    }
    $(".ui.themeable:not(.ui.label)").addClass(getThemeColor(theme));
    switch (theme) {
        case "regular":
            $(".ui.themeable:not(.ui.label), .ui.sub-themeable:not(.ui.label)").removeClass("inverted");
            $(".back-layer")[0].style.setProperty("background", "white", "important");
            $(".back-layer")[0].style.setProperty("color", "black");
            break;
        case "night":
            $(".ui.themeable:not(.ui.label), .ui.sub-themeable:not(.ui.label)").addClass("inverted");
            $(".back-layer")[0].style.setProperty("background", "black", "important");
            $(".back-layer")[0].style.setProperty("color", "white");
            break;
        case "midnight":
            $(".ui.themeable:not(.ui.label), .ui.sub-themeable:not(.ui.label)").addClass("inverted");
            $(".back-layer")[0].style.setProperty("background", "black", "important");
            $(".back-layer")[0].style.setProperty("color", "white");
            break;
        case "hacktoberfest":
            $(".ui.themeable:not(.ui.label), .ui.sub-themeable:not(.ui.label)").addClass("inverted");
            $(".back-layer")[0].style.setProperty("background", "#2f1823", "important");
            $(".back-layer")[0].style.setProperty("color", "white");
            break;
    }
    $.cookie("theme", theme, {expires: 3650});
}

$(document).ready(function() {
    $(".ui.dropdown").dropdown();
    $(".menu .item#regular").on("click", function() {
        resetTheme();
        changeTheme("regular");
    });
    $(".menu .item#night").on("click", function() {
        resetTheme();
        changeTheme("night");
    });
    $(".menu .item#midnight").on("click", function () {
        resetTheme();
        changeTheme("midnight");
    });
    $(".menu .item#hacktoberfest").on("click", function () {
        resetTheme();
        changeTheme("hacktoberfest");
    });
    $(".menu.launch.icon.item").on("click", function(){
        $(".ui.left.sidebar").sidebar("toggle");
    });
    $(".options.launch.icon.item").on("click", function(){
        $(".ui.right.sidebar").sidebar("toggle");
    });
    var transitionTime = 0;
    $(document.body).fadeIn(transitionTime);
    changeTheme($.cookie("theme"));
});
