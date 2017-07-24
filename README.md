# hacka-news-web

A web interface for Hacker News that makes use of my [hacka-news](https://github.com/Coteh/hacka-news) node module.

## Features

- View top 10 headlines from five feed types (hot, new, ask, show, jobs)
- Change theme (regular, night mode)

## Installation

Navigate to semantic folder and run

`gulp build`

Download vendor scripts

`npm run dl-vendors`

Build with webpack

`npm run webpack`

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
