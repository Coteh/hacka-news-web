function getThemeColor(theme) {
    switch (theme) {
        case "regular":
            return "orange";
        case "night":
            return "darkorange";
        case "midnight":
            return "black";
        case "hacktoberfest":
            return "hacktoberfest";
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
    $(`.theme-item`).removeClass("selected");
    switch (theme) {
        case "regular":
            $(".ui.themeable:not(.ui.label), .ui.sub-themeable:not(.ui.label)").removeClass("inverted");
            $(".back-layer")[0].style.setProperty("background", "white", "important");
            $(".back-layer")[0].style.setProperty("color", "black");
            changeStatusBarColor("#f60");
            break;
        case "night":
            $(".ui.themeable:not(.ui.label), .ui.sub-themeable:not(.ui.label)").addClass("inverted");
            $(".back-layer")[0].style.setProperty("background", "black", "important");
            $(".back-layer")[0].style.setProperty("color", "white");
            changeStatusBarColor("#612700");
            break;
        case "midnight":
            $(".ui.themeable:not(.ui.label), .ui.sub-themeable:not(.ui.label)").addClass("inverted");
            $(".back-layer")[0].style.setProperty("background", "black", "important");
            $(".back-layer")[0].style.setProperty("color", "white");
            changeStatusBarColor("#1B1C1D");
            break;
        case "hacktoberfest":
            $(".ui.themeable:not(.ui.label), .ui.sub-themeable:not(.ui.label)").addClass("inverted");
            $(".back-layer")[0].style.setProperty("background", "#2f1823", "important");
            $(".back-layer")[0].style.setProperty("color", "white");
            changeStatusBarColor("#2b81d9");
            break;
    }
    $(`#${theme}.theme-item`).addClass("selected");
    $.cookie("theme", theme, {expires: 3650});
}

function changeStatusBarColor(color) {
    document.querySelector("meta[name='theme-color']").content = color;
}

// Adapted from https://stackoverflow.com/a/44670818
function respondToVisibility(elem, callback) {
    let options = {
        root: document.documentElement,
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) callback()
        });
    }, options);

    observer.observe(elem);
}

$(function() {
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
    respondToVisibility(document.querySelector(".desktop-menu"), () => {
        $(".ui.left.sidebar").sidebar("hide");
        $(".ui.right.sidebar").sidebar("hide");
    })
});
