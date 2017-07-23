var express = require("express"),
    hackaNews = require("hacka-news"),
    hackaTime = hackaNews.time,
    app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/semantic/dist", express.static("semantic/dist"));

app.get(["/", "/hot"], function(req, res) {
    hackaNews.requestFeedStoryIDs("top", 10, function(ids) {
        hackaNews.requestGroup(ids, function(list) {
            for (var i = 0; i < list.length; i++) {
                list[i].timeStr = hackaTime.getTimeStringFromEpoch(list[i].time);
            }
            res.render("list-page", {title: "Top Stories", stories: list, active: "hot"});
        });
    });
});

app.get("/new", function(req, res) {
    hackaNews.requestFeedStoryIDs("new", 10, function(ids) {
        hackaNews.requestGroup(ids, function(list) {
            for (var i = 0; i < list.length; i++) {
                list[i].timeStr = hackaTime.getTimeStringFromEpoch(list[i].time);
            }
            res.render("list-page", {title: "New Stories", stories: list, active: "new"});
        });
    });
});

app.get("/ask", function(req, res) {
    hackaNews.requestFeedStoryIDs("ask", 10, function(ids) {
        hackaNews.requestGroup(ids, function(list) {
            for (var i = 0; i < list.length; i++) {
                list[i].timeStr = hackaTime.getTimeStringFromEpoch(list[i].time);
            }
            res.render("list-page", {title: "Ask HN Stories", stories: list, active: "ask"});
        });
    });
});

app.get("/show", function(req, res) {
    hackaNews.requestFeedStoryIDs("show", 10, function(ids) {
        hackaNews.requestGroup(ids, function(list) {
            for (var i = 0; i < list.length; i++) {
                list[i].timeStr = hackaTime.getTimeStringFromEpoch(list[i].time);
            }
            res.render("list-page", {title: "Show HN Stories", stories: list, active: "show"});
        });
    });
});

app.get("/jobs", function(req, res) {
    hackaNews.requestFeedStoryIDs("job", 10, function(ids) {
        hackaNews.requestGroup(ids, function(list) {
            for (var i = 0; i < list.length; i++) {
                list[i].timeStr = hackaTime.getTimeStringFromEpoch(list[i].time);
            }
            res.render("list-page", {title: "HN Job Postings", stories: list, active: "jobs"});
        });
    });
});

app.get("*", function(req, res) {
    res.status(404).send("Page not found");
});

app.listen(3000, function() {
    console.log("App is now listening on port 3000.");
});
