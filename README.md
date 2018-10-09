# hacka-news-web

![Screenshot](screenshot.png "App Screenshot")

A web interface for Hacker News that makes use of my [hacka-news](https://github.com/Coteh/hacka-news) node module. Features [Embedded JavaScript templates (ejs)](http://ejs.co/) and [Semantic UI](https://semantic-ui.com/).

## Features

- View top 10 headlines from five feed types (hot, new, ask, show, jobs)
- Change theme (regular, night mode)

## Installation

Run gulp build to build Semantic UI components

`gulp build`

Download vendor scripts

`npm run dl-vendors`

Build with webpack

`npm run build`

Run the server

`node app.js`

or

`npm start`

## Known Limitations

- Does not implement all features that the [official Hacker News API](https://github.com/HackerNews/API) and hacka-news provide

## Future Additions

- Add comments view
- Add poll options view
- Add option to change number of posts to view
- Add mobile-friendly view
- Dynamically load news content
